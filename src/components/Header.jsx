import React, { useState, useEffect } from "react";
import bed from "../../assets/images/bed.svg";
import { FaUser } from "react-icons/fa"; // Import the React Icons component for the user icon
import LogoutButton from "./LogoutButton";
import { getCredits } from "../constants/cosntants";
import { Link } from "react-router-dom";


function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [credits, setCredits] = useState(0)

  const clientId = "706892910099-hf7fogsfftmeag62r4nhfuifcn8h0nld.apps.googleusercontent.com"
  useEffect(()=>{
    const setCredit = async ()=>{
      setCredits(await getCredits())
    }
    setCredit()
    function start(){
        gapi.client.init({
            clientId:clientId,
            scope: ""
        })
    }

    gapi.load('client:auth2', start);
})
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">

      
      <a href="/" className="flex space-x-2 items-center">
        <img
          alt="header text"
          src={bed}
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          roomGPT.io
        </h1>
      </a>
      {(localStorage.getItem("loggedIn")=='true') &&
      <div className="relative">
        <LogoutButton/>
        <div className="flex items-center ml-auto cursor-pointer" onClick={toggleDropdown}>
          <p className="text-sm font-medium mr-2">({credits}) credits</p>
          <FaUser className="w-6 h-6" />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border rounded shadow-md">
            <ul className="py-2">
              <Link className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer" to={"/plans"}>Credits</Link>
            </ul>
            <ul className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer">
              {localStorage.getItem("email")}
            </ul>
          </div>
        )}
      </div>
}
    </header>
  );
}

export default Header;
