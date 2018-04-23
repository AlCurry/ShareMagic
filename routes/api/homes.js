const router = require("express").Router();
const homesController = require("../../controllers/homesController");
/** /api is needed!!!! */
router
  .route("/api/homes")
  .get(homesController.findAll)
  .post(homesController.create);

// Matches with "/api/homes/:id"
router
  .route("/api/:id")
  .get(homesController.findById)
  .put(homesController.update)
  .delete(homesController.remove);

module.exports = router;
