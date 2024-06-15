import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // intially password must be hidden
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
          Email Address
          <sup className="text-rose-400">
            *
          </sup>
        </p>
        <input
          className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
          Password
          <sup className="text-rose-400">
            *
          </sup>
        </p>
        <input
          // if the showpassword is true we can see the password but if it is false then we can see the dots
          className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
          type={showPassword ? "text" : "password"}
          required
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
        />
        {/* this is for the eye toggle button if we click on it , it shows the passwors */}
        <span 
          className="absolute right-3 top-[38px] cursor-pointer text-[#bebebe]"
          onClick={() => setShowPassword((prev) => !prev)}>
          {!showPassword ?

              <AiOutlineEye fontSize={24} fill="#AFB2BF"/> : 

              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">
              Forgot Password
          </p>
        </Link>
      </label>

      <button
        className="flex items-center justify-center bg-yellow-500 rounded-[8px] font-medium px-[12px] py-[8px] mt-6"
        >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
