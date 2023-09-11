import React from "react";
import logo from "../../../images/googlelogo_color_272x92dp.png";
import SearchInput from "./SearchInput";

function HomeBody() {
  return (
    <div className="w-full px-5 flex flex-col items-center mt-28">
      <img
        src={logo}
        alt="google logo"
        className="mb-8"
      />
      <SearchInput />
      <div className="flex gap-1 text-[33c4043] mt-8">
        <button className="h-9 px-4 mx-2 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2  dark:bg-slate-950 dark:text-white/[0.8] dark:border-0">
          Google Search
        </button>
        <button className="h-9 px-4 mx-2 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 dark:bg-slate-950 dark:text-white/[0.8] dark:border-0">
          I'm feeling Lucky
        </button>
      </div>
      <div className="mt-4 text-black/[0.8] text-[14px]">
        <span className='px-2 dark:text-white/[0.8]'>Google offered in :</span>
        <span className="px-1 text-blue-800 hover:underline hover:cursor-pointer">English</span>
        <span className="px-1 text-blue-800 hover:underline hover:cursor-pointer">हिंदी</span>
        <span className="px-1 text-blue-800 hover:underline hover:cursor-pointer">తెలుగు</span>
      </div>
    </div>
  );
}

export default HomeBody;
