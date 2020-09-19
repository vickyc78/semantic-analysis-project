let ReviewModel = require("../models/ReviewModel");

module.exports = router => {
  router.post("/compareReview", async (req, res, next) => {
    try {
      console.log("HHHH");
      res.status(200).json(await ReviewModel.compareReview(req.body));
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
