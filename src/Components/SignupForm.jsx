import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event)
  {
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error("Password do not match")
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData={
      ...formData
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-instructor tab */}
      <div>
        <button>student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName div */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
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
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        {/* createPassword and confirm password */}

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          {/* confirm password */}

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {!showConfirmPassword ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
