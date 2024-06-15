import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-instructor tab */}
      <div className="flex bg-[#bebebe]/[0.2] p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`py-2 px-5 rounded-full transition-all duration-200 ${
            accountType === "student"
              ? "bg-[#040b15]/[1] text-[#bebebe]"
              : "bg-transparent text-[#bebebe]/[0.5]"
          }`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
          className={`py-2 px-5 rounded-full transition-all duration-200 ${
            accountType === "instructor"
              ? "bg-[#040b15]/[1] text-[#bebebe]"
              : "bg-transparent text-[#bebebe]/[0.5]"
          }`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        {/* firstName and lastName div */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
              First Name
              <sup className="text-rose-400">*</sup>
            </p>
            <input
              className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
              Last Name<sup className="text-rose-400">*</sup>
            </p>
            <input
              className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* email address */}
        <label>
          <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
            Email Address<sup className="text-rose-400">*</sup>
          </p>
          <input
            className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        {/* createPassword and confirm password */}

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
              Create Password<sup className="text-rose-400">*</sup>
            </p>
            <input
              className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            {/* this is for the eye toggle button if we click on it , it shows the password*/}
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-[#bebebe]"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {/* confirm password */}

          <label className="w-full relative">
            <p className="text-[0.875rem] text-[#bebebe] mb-1 leading-[1.375rem">
              Confirm Password<sup className="text-rose-400">*</sup>
            </p>
            <input
              className="bg-[#bebebe]/[0.2] rounded-[0.5rem] text-[#bebebe] w-full p-[12px] border-b-[.1px] border-[#bebebe]"
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            {/* this is for the eye toggle button if we click on it changes the value of showPassword to true */}
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-[#bebebe]"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {/* below when the showConfirmPassword is true which can be changed using the click on it */}
              {!showConfirmPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="flex items-center justify-center bg-yellow-500 rounded-[8px] font-medium px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
