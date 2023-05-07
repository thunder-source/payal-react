import React from "react";

export default function Magazine() {
  return (
    <div className="magazine flex justify-center items-end gap-28 mb-80">
      <div className="-mb-28">
        <img
          src="./magazine/Magazine-Design-for-website.gif"
          className="w-[380px] h-[415px]"
          alt=""
        />
      </div>
      <div className="w-[372px] text-left relative   pb-32 -mb-4">
        <h2 className="text-white font-bold text-5xl  mb-4">
          Design & You 2023 Magazine
        </h2>
        <p className="text-white font-semibold  ">
          Get free booklet on Design and You 2022 Magazine for Design &
          Architecture Aspirants
        </p>
        <button className="absolute bottom-0 right-0 text-white bg-slate-900 p-1 font-thin px-8 bg-opacity-80 rounded-lg text-lg">
          Get it free now
        </button>
      </div>
    </div>
  );
}
