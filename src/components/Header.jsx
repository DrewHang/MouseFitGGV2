import React from "react";
import { Link } from "react-router-dom";
import { LoginButton, LoginButtonLG } from "./LoginButton.jsx";
import { useAuth } from "../contexts/AuthContext.js";

function Header() {
  const { currentUser, logout } = useAuth();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="MouseFitLogo.png" alt="logo" className="h-12 w-12" />
          <span className="hidden md:block font-semibold text-xl tracking-tight">
            Mousefit.gg
          </span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <LoginButton />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a> */}
        </div>
        <div className="invisible lg:visible">
          <LoginButtonLG />
        </div>
      </div>
    </nav>
  );
}

export default Header;
