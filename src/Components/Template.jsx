import React from 'react';
import frameImage from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { FcGoogle } from 'react-icons/fc';

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  // accepts the props by which the image will automatically appeart according to the login OR signup page
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-[#bebebe]">{desc1}</span>
          <br />
          <span className="text-blue-300 italic">{desc2}</span>
        </p>

        {formtype === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-[#bebebe]/[0.2]"></div>
          <p className="text-[#bebebe]/[0.2] font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="w-full h-[1px] bg-[#bebebe]/[0.2]"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#bebebe]/[0.6] border border-[#bebebe]/[0.2] px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          className="absolute -top-4 right-4"
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
