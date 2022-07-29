import React, { useRef, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useAuth } from "../contexts/AuthContext.js";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullName, setFullName] = useState("");
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError(true);
    }
    try {
      setError(false);
      setLoading(true);
      setErrorMessage("");
      await signup(email, password).then((result) => {
        result.user.updateProfile({
          displayName: fullName,
        });
        return <Navigate to="/dashboard" />;
      });
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setFullName("");
    } catch (error) {
      setErrorMessage(`Failed to create an account`);
      let errorMessage = error.toString().split("Firebase: ")[1];
      toast.error(errorMessage, {
        theme: "dark",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-1 py-1"
        style={{ transform: "translateY(10%)" }}
      >
        <div className="bg-zinc-900 px-6 py-8 rounded shadow-md text-black w-full">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-20 w-auto"
                src="MouseFitLogo.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Sign Up
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or already have an account?{" "}
                <Link to="/login">
                  <span className="font-medium text-teal-600 hover:text-teal-500 cursor-pointer">
                    Login
                  </span>
                </Link>
              </p>
            </div>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="pt-1 pb-4">
                  <label htmlFor="full-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full-name"
                    type="full-name"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div className="pt-4 pb-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      error ? "border-red-800" : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                  />
                </div>
                <div className="pt-4 pb-4">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      error ? "border-red-800" : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                  />
                  {error && (
                    <span className="text-xs text-red-500" id="passwordHelp">
                      Your passwords don't match
                    </span>
                  )}
                </div>
                <div className="pt-4 pb-4">
                  <label htmlFor="password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => {
                      setPasswordConfirm(e.target.value);
                    }}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                  {error && (
                    <span class="text-xs text-red-500" id="passwordHelp">
                      Your passwords don't match
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`${
                    loading ? "disabled:opacity-75 " : ""
                  } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                      aria-hidden="true"
                    />
                  </span>
                  Create Account
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                By signing up, you agree to the{" "}
                <a
                  className="no-underline border-gray-500 text-grey-600 border-b"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="no-underline border-gray-500 text-grey-600 border-b"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
