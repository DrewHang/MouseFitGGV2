const express = require("express");
const router = express.Router();
const Mouses = require("../../../database/models/Mouse");

router.route("/").get(async (req, res) => {
  console.log("GET Events running...");
  try {
    const data = await Mouses.find({});
    res.status(200).send({
      message: "Success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error",
      details: "Something went wrong retrieving the mouses",
    });
  }
});

module.exports = router;
