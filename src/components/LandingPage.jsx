import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { surveyState } from "./recoil/store.js";
import SurveyBox from "./SurveyBox.jsx";
import Header from "./Header.jsx";

function LandingPage() {
  const [isOpen, setIsOpen] = useRecoilState(surveyState);

  return (
    <div className={isOpen ? "blur-sm" : ""}>
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-white text-5xl tracking-tight">
            Find your perfect gaming mouse
          </h1>
        </div>
        <div className="static grid place-items-center sm:p-11 md:m-96">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-l px-5 py-2.5 text-center mr-2 mb-2 mt-96 lg:text-xl lg:mt-1 md:mt-1"
          >
            Get Started
          </button>
          <SurveyBox />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
