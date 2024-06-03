'use client'

import React from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


const Login = () => {
  const router = useRouter()

  const signin = async () => {
    window.location.href = '/api/linkedin/authorize';
  };
  
  
  return (
    <div className="container h-screen mx-auto flex items-center justify-center bg-slate-100">
      <div className="max-w-xl w-full    mx-auto h-min  bg-white flex flex-col items-center">
        <div className="p-5">
          <h1 className="text-2xl font-semibold">Hey there, lets sign up</h1>
          
        </div>
        <hr className="w-full"/>
        <br/>
        <button className="bg-blue-700 font-semibold px-6 py-3 text-white  rounded-md" onClick={() => router.push('/api/linkedin/authorize')}>
          Sign up with LinkedIn
        </button>
        <br />
        <div className="flex items-center gap-2">
          <hr className="w-10" />
          <span className="text-slate-400 font-semibold">OR</span>
          <hr className="w-10" />
        </div>
        <br />
        <div className="flex-col gap-2 flex ">
          <LabeledInput
            label={"Enter eamil"}
            placeholder={"eg.abc@gmail.com"}
          />
          <LabeledInput label={"Password"} placeholder={"enter password"} />
         <div/>
          <button disabled={true} className="bg-blue-400 font-semibold px-6 py-3 text-white  rounded-md">
            Sign up with Email
          </button>
        </div>
        <br/>
      </div>
    </div>
  );
};

export function LabeledInput({ label, placeholder, ref }) {
  return (
    <div className="flex flex-col gap-2">
      <label id="label" for="label" className="text-gray-500 font-semibold">
        {label}
      </label>
      <input
        className=" border-[2px] px-2 py-1 text-lg rounded-lg"
        id={label}
        ref={ref}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Login;
