import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useRecoilValue } from "recoil";
import { itemSelected } from "./recoil/store.js";

export default function SurveyButton() {
  const selected = useRecoilValue(itemSelected);
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
      <div className="flex justify-between">
        <button className="text-white font-medium inline-flex items-center py-2 px-4 hover:bg-slate-700 rounded-l-lg">
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
        </button>
        <button className="text-white font-medium inline-flex items-center py-2 px-4 hover:bg-slate-700 rounded-r-lg">
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
      </div>
    </Transition.Child>
  );
}
