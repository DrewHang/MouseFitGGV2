import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

export function LoginButton() {
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  const logoutUser = () => {
    logout().then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {" "}
      {currentUser ? (
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={logoutUser}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <Link to="/login">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      )}
    </>
  );
}

export function LoginButtonLG() {
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  const logoutUser = () => {
    logout().then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {currentUser ? (
        <button
          onClick={logoutUser}
          className="inline-block text-sm px-4 py-2 leading-none border rounded hover:border-white text-teal-500 border-teal-500 hover:text-white mt-4 lg:mt-0"
        >
          Log Out
        </button>
      ) : (
        <Link to="/login">
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded hover:border-white text-teal-500 border-teal-500 hover:text-white mt-4 lg:mt-0">
            Log In
          </button>
        </Link>
      )}
    </>
  );
}
