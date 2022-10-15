import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import * as R from "ramda";
import { questions } from "../../utils/questions.js";
import SurveyButton from "./SurveyButton";
import { startSetFilteredMouses } from "../../../actions/filteredMouse.js";
import { startSetLoading } from "../../../actions/loading.js";
import { startSetMouse } from "../../../actions/mouse";

function SurveyRadio({
  questionNumber,
  handleNext,
  handlePrev,
  mouses,
  filteredMouse,
  startSetMouse,
  startSetFilteredMouses,
  startSetLoading,
}) {
  const [selected, setSelected] = useState("");
  const [filterData, setFilterData] = useState({});
  const [finalFilterData, setFinalFilterData] = useState([]);

  const numberOfQuestions = 3;

  useEffect(() => {
    // Filter By grip [array]
    if (questionNumber === 1) {
      const regularFilterGrip = mouses.filter((mouse) =>
        mouse.grip.includes(filterData.grip)
      );

      console.log("filter", regularFilterGrip);
      startSetFilteredMouses(regularFilterGrip);
    }

    // Filter by interface
    if (questionNumber === 2) {
      const filterInterfaceGrip = filteredMouse.filter((mouse) =>
        mouse.interface.includes(filterData.interface)
      );

      console.log("filter", filterInterfaceGrip);
      startSetFilteredMouses(filterInterfaceGrip);
    }

    if (questionNumber === 3) {
      const filterWeight = R.filter(
        (mouse) =>
          parseInt(mouse.weight.$numberDecimal) >= filterData.weight[0] &&
          parseInt(mouse.weight.$numberDecimal) <= filterData.weight[1]
      )(filteredMouse);

      console.log("filter", filterWeight);
      startSetFilteredMouses(filterWeight);

      if (!R.isNil(filterData.price)) {
        console.log(filterData.price);
        const filterPrice = R.filter(
          (mouse) =>
            parseInt(mouse.price.$numberDecimal) >= filterData.price[0] &&
            parseInt(mouse.price.$numberDecimal) <= filterData.price[1]
        )(filteredMouse);
        console.log("filter", filterPrice);
        startSetFilteredMouses(filterPrice);
      }
    }
  }, [filterData]);

  const handleData = () => {
    const questionCategory = questions[questionNumber].type;

    const newObj = {};

    newObj[questionCategory] = selected;

    setFilterData((prevState) => ({
      ...prevState,
      ...newObj,
    }));
  };

  let navigate = useNavigate();

  const handleSubmit = () => {
    startSetLoading(true);
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };

    const randomNumber = getRandomInt(filteredMouse.length - 1);

    startSetMouse(filteredMouse[randomNumber]);
    navigate("../results", { replace: true });
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
  filteredMouse: state.filteredMouse,
});

export default connect(mapStateToProps, {
  startSetFilteredMouses,
  startSetLoading,
  startSetMouse,
})(SurveyRadio);
