import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

export default function SurveyButton({
  questionNumber,
  handleNext,
  handlePrev,
  handleData,
  handleSubmit,
}) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          className="text-white font-medium inline-flex items-center py-2 px-4 hover:bg-zinc-700 rounded-l-lg"
        >
          {questionNumber >= 1 && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Prev</span>
            </>
          )}
        </button>
        {questionNumber === 3 ? (
          <button
            onClick={async () => {
              await handleData();
              await handleSubmit();
            }}
            className="text-white font-medium inline-flex items-center py-2 px-4 hover:bg-zinc-700 rounded-r-lg"
          >
            <span>Submit</span>
          </button>
        ) : (
          <button
            onClick={() => {
              handleData();
              handleNext();
            }}
            className="text-white font-medium inline-flex items-center py-2 px-4 hover:bg-zinc-700 rounded-lg"
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </Transition.Child>
  );
}
