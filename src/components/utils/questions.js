export const questions = [
  {
    questionText: "What is your preferred mouse grip?",
    type: "mouseGrip",
    answerOptions: [
      { answerText: "Claw", value: "Claw" },
      { answerText: "Fingertip", value: "Fingertip" },
      { answerText: "Palm", value: "Palm" },
    ],
  },
  {
    questionText: "Wired or Wireless?",
    type: "interface",
    answerOptions: [
      { answerText: "Wired", value: "wired" },
      { answerText: "Wireless", value: "wireless" },
    ],
  },
  {
    questionText: "Light, Medium, or Heavy Weight?",
    type: "weight",
    answerOptions: [
      { answerText: "Light", value: [0, 80] },
      { answerText: "Medium", value: [80, 120] },
      { answerText: "Heavy", value: [120, 1000] },
    ],
  },
  {
    questionText: "Small, Medium, or Large Mouse Size?",
    type: "mouseSize",
    answerOptions: [
      { answerText: "Small", value: [0, 292800] },
      { answerText: "Medium", value: [292800, 357000] },
      { answerText: "Large", value: [357000, 100000000] },
    ],
  },
];
