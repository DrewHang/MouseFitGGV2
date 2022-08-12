const mongoose = require("mongoose");

const mouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grip: [String],
  interface: [String],
  weight: mongoose.Schema.Types.Decimal128,
  length: mongoose.Schema.Types.Decimal128,
  width: mongoose.Schema.Types.Decimal128,
  height: mongoose.Schema.Types.Decimal128,
  price: mongoose.Schema.Types.Decimal128,
  link: {
    type: String,
  },
});

const Mouse = mongoose.model("Mouse", mouseSchema);

module.exports = Mouse;
