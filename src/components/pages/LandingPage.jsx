import React from "react";
import { useRecoilState } from "recoil";
import { surveyState } from "../recoil/store.js";
import SurveyBox from "./survey/SurveyBox.jsx";
import Header from "../common/Header";

function LandingPage() {
  const [isOpen, setIsOpen] = useRecoilState(surveyState);

  return (
    <div
      className={isOpen ? "blur-sm" : ""}
      style={{ height: "100vh", display: "relative" }}
    >
      <Header />
      <div className="flex justify-center">
        <h1 className="text-white text-5xl tracking-tight lg: mt-20">
          Find your perfect gaming mouse
        </h1>
      </div>
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "165px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="p-2 text-xl text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg"
        >
          Get Started
        </button>
      </div>
      <SurveyBox />
    </div>
  );
}

export default LandingPage;
