const express = require("express");
const path = require("path");
const app = express();
const apiRoutes = require("./routes");
const db = require("../database");
const cors = require("cors");
const R = require("ramda");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const whitelist = ["http://localhost:3000"];

const whitelistedApexHost = process.env.PUBLIC_URL;
const corsOptions = {
  origin: (origin, callback) => {
    console.log("origin", origin);
    // Allow all subdomains of the apex host

    const whitelisted = whitelist.indexOf(origin) >= 0;

    if (whitelisted) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", apiRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
