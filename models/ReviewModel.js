let ReviewSchema = require("../mongooseModel/Review");
let mongoose = require("mongoose");
let Review = mongoose.model("Review", ReviewSchema);
let _ = require("lodash");
module.exports = {
  async compareReview(data) {
    let allReview = await Review.findOne({
      text: data.text
    });
    if (!_.isEmpty(allReview)) {
      return allReview;
    }
  }
};
