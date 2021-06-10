// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const {
  getUsers,
  addUser,
  deleteUser,
} = require("../controller/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

// Get User Page
router.get("/", decorateHtmlResponse("User"), getUsers);

// Delete User:
router.delete("/:id", deleteUser);

// Add User With Avatar {Rest API}
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// Module Export:
module.exports = router;
