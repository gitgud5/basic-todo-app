import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-zinc-800">
        <div className="rounded-xl p-8 m-4 bg-zinc-700 text-white ">
          <h1 className="text-center mb-3 text-2xl">Login</h1>

          <div className="flex flex-col space-y-3">
            <div className=" relative ">
              <input
                type="text"
                id="rounded-email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>

            <div className=" relative ">
              <input
                type="password"
                id="rounded-pass"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your password"
                
              />
            </div>

            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={()=>{
                navigate('/')
              }}
            >
              Sign in mate?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
