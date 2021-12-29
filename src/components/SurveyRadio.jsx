import { RadioGroup } from "@headlessui/react";
import { useRecoilValue, useRecoilState } from "recoil";
import { surveyNumber, currentFilter, itemSelected } from "./recoil/store.js";
import { questions } from "./lib/questions.js";

export default function SurveyRadio() {
  const number = useRecoilValue(surveyNumber);
  const [selected, setSelected] = useRecoilState(currentFilter);
  const [isSelected, setIsSelected] = useRecoilState(itemSelected);

  const buttonClicked = () => {
    setIsSelected(true);
  };

  return (
    <div className="w-full px-1 py-9">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup
          value={selected}
          onChange={setSelected}
          onClick={buttonClicked}
        >
          <RadioGroup.Label className="sr-only">Mouse Options</RadioGroup.Label>
          <div className="space-y-2">
            {questions[number].answerOptions.map((option, index) => (
              <RadioGroup.Option
                key={index}
                value={option.value}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-lg">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {option.answerText}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
