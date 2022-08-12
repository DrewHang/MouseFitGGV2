const express = require("express");
const router = express.Router();

const mousesApi = require("./mouses");

router.use("/mouses", mousesApi);

module.exports = router;
