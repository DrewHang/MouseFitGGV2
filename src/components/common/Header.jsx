import React from "react";
import { Link } from "react-router-dom";
import { LoginButton, LoginButtonLG } from "./LoginButton.jsx";
import { withWindowDimensions } from "./responsive.js";

function Header({ isMobile }) {
  return (
    <nav className="flex items-center justify-between bg-black p-6">
      <Link to="/">
        <div className="flex items-center text-white mr-6">
          <img
            src="MouseFitLogo.png"
            alt="logo"
            className="object-contain h-12 w-12"
          />
          <span className="hidden md:block font-semibold text-xl tracking-tight">
            Mousefit.gg
          </span>
        </div>
      </Link>
      {isMobile ? <LoginButton /> : <LoginButtonLG />}
    </nav>
  );
}

export default withWindowDimensions(Header);
