import { NextRequest, NextResponse } from "next/server";

const authorizartion = () => {
  return encodeURI(
    `https://linkedin.com/oauth/v2/authorization?client_id=${process.env.CLIENT_ID}&response_type=code&scope=${process.env.SCOPE}&redirect_uri=${process.env.OAUTH2_REDIRECT_URL}`
  );
};


export const GET =  (req) => {
  try {
    return NextResponse.redirect(authorizartion());
  } catch (error) {
    console.log("authorize", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


