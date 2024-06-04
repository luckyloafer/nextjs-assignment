// pages/user.jsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Modal } from "@mui/material";
import { Airplay, Check, HomeIcon, Maximize, Plus, RotateCcwIcon, Zap } from "lucide-react";

const UserPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    //const accessToken = Cookies.get('accessToken');
    const userCookie = Cookies.get("user");
    console.log(userCookie);
    if (userCookie) {
      const user = JSON.parse(userCookie);
      console.log(user);
      setUser(user);
    } 
    else {
      // Redirect to login page if accessToken or user cookie is missing
      router.push("/");
    }

    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        handleOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const style = {
     position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //  width: 500,
    width: "90%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {user && (
        <div className="container h-screen mx-auto flex items-center justify-center bg-slate-100">
          <div className="  max-w-xl w-full    mx-auto h-min  bg-white flex flex-col items-center">
            <div className="p-5">
              <div className="flex gap-3 items-center">
                <img src={user.picture} className="w-20 h-20 rounded-full" />
                <div className="flex flex-col">
                  <h1 className="font-semibold">{user.name}</h1>
                  <h1 className="text-slate-400 font-light">{user.email}</h1>
                </div>
              </div>
            </div>
            <hr className="w-full" />
            <br />
            {/* <button className="bg-blue-700 font-semibold px-6 py-3 text-white  rounded-md" onClick={handleOpen}>
          Click to open a menu(Command + K)
        </button> */}
            <button className="bg-blue-700 font-semibold px-6 py-3 text-white  rounded-md" onClick={handleOpen}>Click to open a menu(Command + K)</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              
            >
              <div style={style} className=" bg-white max-w-md md:max-w-xl rounded-md  ">
                <div className="border  rounded-md  px-5 py-4 flex gap-2 justify-between">
                  <input
                    className="font-normal outline-none w-full"
                    placeholder="Write a custom prompt"
                  />
                  <button className="bg-purple-500 rounded-md px-2 py-1 text-white">
                    Enter
                  </button>
                </div>
                <div className="ml-4 mt-2 mb-2">
                    <Options icon={<Zap size={15}/>} text="Generate content ideas"/>
                    <Options icon={<Check size={15}/>} text="Fix grammatical issues"/>
                    <Options icon={<Maximize size={15}/>} text="Expand & elaborate"/>
                    <Options icon={<RotateCcwIcon size={15}/>} text="Rewrite"/>
                    <Options icon={<Plus size={15}/>} text="Make it effective"/>
                </div>
                <div></div>
              </div>
            </Modal>

            <br />
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

function Options({icon,text}){
    return <div className="flex items-center gap-1 py-1">
        <TabIcon icon={icon} />
        <h1 className="text-black-400 font-normal text-sm">{text}</h1>
    </div>
}

function TabIcon({ icon, active }) {
    return (
      <div className='p-2 rounded-md'>
        {icon}
      </div>
    );
  }

export default UserPage;
