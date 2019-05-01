const router = require("express").Router();
const answersController = require("../../controllers/answersController");

// Matches with "/api/answers"
router.route("/")
  .post(answersController.create);

// Matches with "/api/answers/:id"
router
  .route("/:id")
  .get(answersController.findAll)
  .put(answersController.update)
  .delete(answersController.remove);

module.exports = router;
