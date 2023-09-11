import React,{useContext} from "react";
import { TbGridDots } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { ContextApi } from "../../Context/ContextApi";
import g_logo from '../../../images/g_logo.png';


function HomeHeader() {

  const ctx = useContext(ContextApi);
  const theme = ctx.theme;

  const changeThemeHandler=()=>{
    if(localStorage.getItem('theme')){
      localStorage.removeItem('theme');
    }
    else{
      localStorage.setItem('theme','on');
    }
    ctx.changeTheme();
  }

  return (
    <div className="flex justify-end items-center py-2 text-[13px]  dark:bg-slate-900 font-sans pt-4">
      <button
        className="flex items-center justify-center mx-2 rounded-3xl bg-[#f2f2f2] w-8 h-8 border-solid border-2 border-gray-500 dark:bg-inherit"
        onClick={() => changeThemeHandler()}
      >
        {theme ? <FiSun size={20} color='#f5c71a'/> : <BsMoonStarsFill size={15}/>}
      </button>
      <a href="https://mail.google.com/mail" className="mx-2 hover:underline  dark:text-white/[0.8]">
        Gmail
      </a>
      <a href="https://www.google.com/imghp" className="mx-2 hover:underline  dark:text-white/[0.8]">
        Images
      </a>
      <span
        title="Google apps"
        className="mx-2 w-10 h-10 flex items-center justify-center rounded-3xl hover:bg-[#f2f2f2] dark:hover:bg-slate-950"
      >
        {theme ? <TbGridDots size={20} color='white'/> :  <TbGridDots size={20}/> }
      </span>
      <span className="flex justify-center items-center mx-3 hover:bg-[#f2f2f2] rounded-3xl w-11 h-11 dark:hover:bg-slate-950">
        <img src={g_logo} alt='g-logo' className="w-6 h-6"/>
      </span>
    </div>
  );
}

export default HomeHeader;
