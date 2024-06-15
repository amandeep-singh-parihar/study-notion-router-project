import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      {/* below are the basic tampletes for both sign up and log in page but here this is for signup page */}
      {/* we are seding them as a prop to the template */}

      <Template
        title="Join  the millions learning to code with StudyNotion for free"
        desc1="Build skills for today,tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup;
