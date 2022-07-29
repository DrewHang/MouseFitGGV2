import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { surveyState, surveyNumber, itemSelected } from "../../recoil/store.js";
import { questions } from "../../utils/questions.js";
import SurveyRadio from "./SurveyRadio.jsx";
import SurveyButton from "./SurveyButton.jsx";

function SurveyBox() {
  const [isOpen, setIsOpen] = useRecoilState(surveyState);
  const [number, setNumber] = useRecoilState(surveyNumber);
  const selected = useRecoilValue(itemSelected);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false);
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
                  Question {number + 1} / 4
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-xl text-white">
                    {questions[number].questionText}
                  </p>
                </div>
                <SurveyRadio />
                {selected && <SurveyButton />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SurveyBox;
