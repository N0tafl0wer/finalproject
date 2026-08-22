import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Rightsection = () => {


  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
return(
    <div className="w-1/2 h-screen justify-center flex">
      <div className="flex flex-col px-8 md:px-16 bg-gray-200 w-full h-full">

        <h2 className="text-[33px] font-semibold mt-[30px]">
          Brainbench
        </h2>
        <p className="text-[25px] font-semibold">
            Sign into your account
        </p>
        <p>Enter your student credentials to access the portal.</p>
        <label className="mt-7 font-medium mb-2">
          Student Id <span className="text-red-500">*</span>
        </label>
    
        <input
          type="text"
          placeholder="064/pha/2526"
          className="border border-[2px] border-blue-800 rounded-sm font-light h-[45px] px-3 pr-12 text-[18px] w-[80%] focus:outline-none focus:ring-1 focus:ring-blue-500"
  />

        <label className="font-medium mb-2">
  Password <span className="text-red-500">*</span>
</label>

<div className="relative mb-8">
  <input
    type={showPassword ? "text" : "password"}
    className="border border-[2px] border-blue-800 rounded-sm font-light h-[45px] px-3 pr-12 text-[18px] w-[80%] focus:outline-none focus:ring-1 focus:ring-blue-500"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-32 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
  >
    {showPassword ? "👁️" : "🙈"}
  </button>
</div>
        <div className="flex flex-row items-center justify-between mb-8 w-[80%]">
  <div className="flex items-center gap-2">
    <input type="checkbox" className="w-3 h-3" />

    <span className="text-[18px] text-gray-600">
            Remember me
          </span>
           </div>
           <a href="" className="hover:underline text-[18px] font-medium text-blue-800">
          Forgot password
        </a>
       
        </div>
        <button 
        onClick={() => navigate("/dashboard")}
        className="bg-blue-800 w-[80%] hover:bg-blue-700 text-white h-[50px] rounded-[10px] text-[18px] font-bold
        ">
         Sign in
        </button>
    
</div>
</div>

)

}

export default Rightsection;
