const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

const city = require("./city");
// const path = require('path');
const cors = require("cors");

app.use(cors());
app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// let reqCount = 0;
router.get("/", (req, res) => {
//   reqCount++;
  res.json(city);
});
// router.get("/countervistors", (req, res) => {
//   res.send(`number of vist ${reqCount} requst`);
// });

// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 4000;

app.use("/.netlify/functions/api", router);

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

module.exports.handler = serverless(app);
