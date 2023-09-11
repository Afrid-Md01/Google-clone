import React, { useState, useContext, useEffect } from "react";
import googleLogo from "../../../images/googlelogo_color_272x92dp.png";
import SearchInput from "../../home/Body/SearchInput";
import { TbGridDots } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { menu } from "../../../utils/Constants";
import { ContextApi } from "../../Context/ContextApi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import g_logo from "../../../images/g_logo.png";

function SearchResultsHeader() {
  const ctx = useContext(ContextApi);
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(ContextApi);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setImageSearch(isTypeImage ? true : false);
  };

  const changeThemeHandler = () => {
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "on");
    }
    ctx.changeTheme();
  };

  return (
    <div className="p-[15px] pb-0 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white dark:bg-slate-900">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              alt="google-logo "
              src={googleLogo}
              className="hidden md:block w-[100px] mr-10"
            />
          </Link>
          <SearchInput from="searchresult" />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <button
            className="flex items-center justify-center mx-2 rounded-3xl bg-[#f2f2f2] w-8 h-8 border-solid border-2 border-gray-500 dark:bg-inherit"
            onClick={() => changeThemeHandler()}
          >
            {ctx.theme ? (
              <FiSun size={20} color="#f5c71a" />
            ) : (
              <BsMoonStarsFill size={15} />
            )}
          </button>
          <span
            title="Google apps"
            className="mx-2 w-10 h-10 flex items-center justify-center rounded-3xl hover:bg-[#f2f2f2] dark:hover:bg-slate-950"
          >
            {ctx.theme ? (
              <TbGridDots size={20} color="white" />
            ) : (
              <TbGridDots size={20} />
            )}
          </span>
          <span className="flex justify-center items-center mx-3 hover:bg-[#f2f2f2] rounded-3xl w-11 h-11 dark:hover:bg-slate-950">
            <img src={g_logo} alt="g-logo" className="w-6 h-6" />
          </span>
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectedMenu === menu.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsHeader;
