let mongoose = require("mongoose");
var Schema = mongoose.Schema;

let reviewSchema = new Schema({
  text: {
    type: String
  },
  rank: {
    type: Number
  }
});

module.exports = reviewSchema;
