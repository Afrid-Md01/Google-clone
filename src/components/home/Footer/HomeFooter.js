import React from "react";
import { quickLinks } from "../../../utils/Constants";
import { settingMenu } from "../../../utils/Constants";

function HomeFooter() {
  return (
    <div className="bg-[#f2f2f2] dark:bg-slate-950">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
        <div className="flex justify-center">
          {quickLinks.map((val, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline hover:cursor-pointer"
            >
              {val}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          {settingMenu.map((val, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline hover:cursor-pointer"
            >
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
