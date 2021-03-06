// // app.js
const express = require("express");
// let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("cors");
// let Schema = mongoose.Schema;
// // Create Express app
let router = express.Router();
const app = express();
// var env = require("./config/env/development");
// mongoose.connect(env.dbUrl, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });
let reviewRoutes = require("./controllers/ReviewController");

// app.use("/Review", router);
// reviewRoutes(router);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});
// // A sample route
app.get("/", (req, res) => res.send("Hello World!"));
var temp = 0,
  count = 0;
app.get("/:word", (req, res) => {
  count++;
  console.log("req.params.word", req.params.word);
  var Sentiment = require("sentiment");
  var sentiment = new Sentiment();
  var result = sentiment.analyze(req.params.word);
  temp += result.score;
  console.log("temp temp", temp);
  let sendData = temp / count;
  console.log("KKKKKKKKK", sendData);
  res.status(200).json({ totalReview: sendData, currentReview: result.score });
});
app.use(cors());
// // Start the Express server
app.listen(3000, () => console.log("Server running on port 3000!"));
// var Sentiment = require("sentiment");
// var sentiment = new Sentiment();
// var result = sentiment.analyze("Cats are like.");
// console.log(result);
