export const questions = [
  {
    questionText: "What is your preferred mouse grip?",
    type: "grip",
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
      { answerText: "Wired", value: "Wired" },
      { answerText: "Wireless", value: "Wireless" },
    ],
  },
  {
    questionText: "Light, Medium, or Heavy Weight?",
    type: "weight",
    answerOptions: [
      { answerText: "Light", value: [0, 60] },
      { answerText: "Medium", value: [61, 80] },
      { answerText: "Heavy", value: [81, 1000] },
    ],
  },
  {
    questionText: "What is your budget?",
    type: "price",
    answerOptions: [
      { answerText: "Less Than $39.99", value: [0, 39.99] },
      { answerText: "$40 - $69.99", value: [40, 69.99] },
      { answerText: "over $70", value: [70, 100000000] },
    ],
  },
];
