import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import axios from "axios";
import qs from "qs";

let accessToken = null;

const Redirect = async (code) => {
  const payload = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.OAUTH2_REDIRECT_URL,
    grant_type: "authorization_code",
    code: code,
  };

  try {
    var { data } = await axios({
      url: `https://linkedin.com/oauth/v2/accessToken?${qs.stringify(payload)}`,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(data.access_token);

    const accessToken = data.access_token
    
      const userResponse = await axios({
        url: 'https://api.linkedin.com/v2/userinfo',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      //res.json(data);
      const user = userResponse.data;
      return { user,accessToken };
    //return data;
  } catch (error) {
    console.log(error);
    
  }
};

export const GET = async (req) => {
  try {
    const code = req.nextUrl.searchParams.get("code");
    const response = await Redirect(code);

    console.log(response);
   

    const { user, accessToken } = response;
    console.log(user);
    console.log(accessToken)
     const redirectUrl = new URL('/user', req.url); // Construct absolute URL
    const data = await JSON.stringify(user)
    const res= NextResponse.redirect(redirectUrl)
    
    res.cookies.set('user', data, { path: '/' });
      return res

  } catch (error) {
    console.log("authorize", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
