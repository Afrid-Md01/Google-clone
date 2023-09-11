import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Mic from "../../../images/mic.png";
import Img from "../../../images/image.png";
import { useParams, useHistory } from "react-router-dom";

function SearchInput() {
  const history = useHistory();
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      history.push(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover-border-0 focus-within:shadow-c focus-within:border-0 dark:hover:bg-inherit dark:hover:border-0 dark:shadow-white
      dark:focus-within:bg-inherit dark:focus-within:border-0 dark:focus-within:shadow-white"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        id='search'
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        className="grow outline-0 text-black/[0.87] dark:bg-inherit dark:text-white"/>
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#707578"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img alt="mic-icon" src={Mic} className="h-6 w-6 cursor-pointer" />
        <img alt="img-icon" src={Img} className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchInput;
