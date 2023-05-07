import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mx-auto flex flex-col items-center w-screen fixed top-0 z-50 bg-transparent backdrop-blur-2xl shadow-md ">
      <div className="bg-[orange] w-full h-[34px]">
        <div className="container  h-full w-full mx-auto  flex items-center justify-end gap-2 pr-8">
          <div className="font-semibold px-2 rounded-sm bg-white">
            Request a Callback
          </div>
          <div className="font-semibold px-2 rounded-sm bg-white">
            Online Counselling
          </div>
          <div className="text-white flex items-center">
            8800-22-6864 (10am to 8pm)
            {/* <div className="rounded-full border-[1px] px-1.5 py-[0.1rem] ml-2">
              icons
            </div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-[85px]  container px-8">
        <div className="h-full ">
          <img
            src="https://pahaldesign.com/wp-content/uploads/2015/04/pahal-logo-300x120.png"
            alt=""
            className="h-full py-4"
          />
        </div>
        <div className="font-semibold flex gap-1">
          {/* <Link to="/my-path">Go to My Path</Link> */}
          <Link to="/about" className="hover:text-orange-500">
            ABOUT
          </Link>
          <span className="font-extralight">|</span>
          <Link to={""} className="hover:text-orange-500">
            ONLINE FORM
          </Link>
          <span className="font-extralight">|</span>
          <Link to={""} className="hover:text-orange-500">
            INFORMATICS LINKS
          </Link>
          <span className="font-extralight">|</span>
          <Link to={""} className="hover:text-orange-500">
            RESULTS
          </Link>
          <span className="font-extralight">|</span>
          <Link to={""} className="hover:text-orange-500">
            STUDENT HUB
          </Link>
          <span className="font-extralight">|</span>
          <Link to={""} className="hover:text-orange-500">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}
