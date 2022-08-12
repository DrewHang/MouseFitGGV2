import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import * as R from "ramda";
import { questions } from "../../utils/questions.js";
import SurveyButton from "./SurveyButton";
import { startSetFilteredMouses } from "../../../actions/filteredMouse.js";
import { startSetLoading } from "../../../actions/loading.js";

function SurveyRadio({
  questionNumber,
  handleNext,
  handlePrev,
  mouses,
  startSetFilteredMouses,
  startSetLoading,
}) {
  const [selected, setSelected] = useState("");
  const [filterData, setFilterData] = useState({});
  const [finalFilterData, setFinalFilterData] = useState([]);

  const numberOfQuestions = 3;

  useEffect(() => {
    console.log("filter Data", finalFilterData);
  }, [filterData]);

  const handleData = () => {
    const questionCategory = questions[questionNumber].type;

    const newObj = {};

    newObj[questionCategory] = selected;

    setFilterData((prevState) => ({
      ...prevState,
      ...newObj,
    }));

    // Filter By grip [array]
    if (questionNumber === 0) {
      const filterGrip = mouses.includes(filterData.grip);
      setFinalFilterData(filterGrip);
    }

    // Filter by interface [array]
    if (questionNumber === 1) {
      const filterInterface = R.filter(() =>
        mouses.interface.includes(filterData.interface)
      )(finalFilterData);
      setFinalFilterData(filterInterface);
    }

    // Filter by weight
    if (questionNumber === 2) {
      const filterWeight = R.filter(
        (mouse) =>
          Number(mouse.weight.$numberDecimal) >= filterData.weight[0] &&
          Number(mouse.weight.$numberDecimal) <= filterData.weight[1]
      )(finalFilterData);

      setFinalFilterData(filterWeight);
    }

    if (questionNumber === 3) {
      const filterPrice = R.filter(
        (mouse) =>
          mouse.price.$numberDecimal >= filterData.price[0] &&
          mouse.price.$numberDecimal <= filterData.price[1]
      )(finalFilterData);

      setFinalFilterData(filterPrice);
    }
  };

  const handleSubmit = () => {
    startSetLoading(true);
    // Filter By grip [array]

    console.log(mouses[0].weight.$numberDecimal);

    const currFilteredData = R.compose(
      R.filter(() => mouses.grip.includes(filterData.grip)),
      R.filter(() => mouses.interface.includes(filterData.interface)),
      R.filter(
        (mouse) =>
          Number(mouse.weight.$numberDecimal) >= filterData.weight[0] &&
          Number(mouse.weight.$numberDecimal) <= filterData.weight[1]
      )
      // R.filter(
      //   (mouse) =>
      //     mouse.price.$numberDecimal >= filterData.price[0] &&
      //     mouse.price.$numberDecimal <= filterData.price[1]
      // )
    )(mouses);

    console.log("mouses", currFilteredData);
  };

  return (
    <div className="w-full px-1 pt-9">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Mouse Options</RadioGroup.Label>
          <div className="space-y-2">
            {questions[questionNumber].answerOptions.map((option, index) => (
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
      <SurveyButton
        questionNumber={questionNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
        handleData={handleData}
      />
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

const mapStateToProps = (state) => ({
  loading: state.loading,
  survey: state.survey,
  mouses: state.mouses,
});

export default connect(mapStateToProps, {
  startSetFilteredMouses,
  startSetLoading,
})(SurveyRadio);
