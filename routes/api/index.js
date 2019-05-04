const router = require("express").Router();
const questionRoutes = require("./questions");
const answerRoutes = require("./answers");
const usersRoutes = require("./users");

router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);
router.use("/users", usersRoutes);

module.exports = router;
