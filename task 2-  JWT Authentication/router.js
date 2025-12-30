const express = require("express");
const userController = require("./usercontroller");
const router = express.Router();
router.post("/signup", userController.signup);
router
  .route("/")
  .get(
    userController.protect,
    userController.restrictTo("admin"),
    userController.getAllUsers
  );

module.exports = router;
