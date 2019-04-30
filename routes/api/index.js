const router = require("express").Router();
const questionRoutes = require("./questions");
const answerRoutes = require("./answers");

// Book routes
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);

module.exports = router;
