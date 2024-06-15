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
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          // if the showpassword is true we can see the password but if it is false then we can see the dots 
          type={showPassword ? "text" : "password"}
          required
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
        />
        {/* this is for the eye toggle button if we click on it , it shows the passwors */}
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
}

export default LoginForm;
