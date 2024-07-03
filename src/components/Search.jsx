import React from "react";
import "../Styles/Search.css";
import { CiSearch } from "react-icons/ci";
export default function Search() {
  return (
    <div className="search">
      <input 
        type="text"
        placeholder="Search grocery.."
        className="sch-ipt"
      ></input>
      <button className="search-btn">
        <CiSearch />
      </button>
    </div>
  );
}
