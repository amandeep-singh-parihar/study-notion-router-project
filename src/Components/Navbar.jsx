import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

function Navbar({ setIsLoggedIn, isLoggedIn }) {
  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        {/* Home , about , contact on the navbar for now all links to the homepage */}
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* four buttons on the navbar on the rightside but we can only view two at a time on the condition of login or logout */}
      {/* if we are loggedout than Login and Sign Up button will appear */}
      {/* if we are loggedIn than log Out and Dashboard button will appear */}
      <div className="flex ml-5 gap-3">
        {/* isLoggedIn is false and ! of it is True so it show Login intially */}

        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {/* isLoggedIn is false and ! of it is True so it show Sign up intially */}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}

        {/* these button only appear when we are loggedIn and on clicking then we can make logged out->which we can be done using setIsloogedIn(false) */}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
