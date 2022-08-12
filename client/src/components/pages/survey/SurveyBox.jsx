import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { questions } from "../../utils/questions.js";
import SurveyRadio from "./SurveyRadio.jsx";
import SurveyButton from "./SurveyButton.jsx";
import { startSetSurvey } from "../../../actions/survey.js";

function SurveyBox({ survey, startSetSurvey }) {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleNext = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (questionNumber >= 1) {
      setQuestionNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      <Transition appear show={survey} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            startSetSurvey(false);
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-zinc-800 shadow-lg shadow-zinc-800 rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-teal-200 pt-3 pb-3"
                >
                  Question {questionNumber + 1} / 4
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-xl text-white">
                    {questions[questionNumber].questionText}
                  </p>
                </div>
                <SurveyRadio
                  questionNumber={questionNumber}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  survey: state.survey,
  mouses: state.mouses,
});

export default connect(mapStateToProps, {
  startSetSurvey,
})(SurveyBox);
