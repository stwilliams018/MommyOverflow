const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findAll)
  .post(questionsController.create);

  router.route("/user/:id")
  .get(questionsController.findAllUser);


// Matches with "/api/questions/:id"
router
  .route("/:id")
  .get(questionsController.findById)
  .put(questionsController.update)
  .delete(questionsController.remove);

module.exports = router;
