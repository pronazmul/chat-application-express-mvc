// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const {
  getUsers,
  addUser,
  deleteUser,
} = require("../controller/userController");
const { checkLogin, checkRole } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

// Get User Page
router.get(
  "/",
  decorateHtmlResponse("User"),
  checkLogin,
  checkRole(["admin"]),
  getUsers
);

// Delete User:
router.delete("/:id", checkLogin, checkRole(["admin"]), deleteUser);

// Add User With Avatar {Rest API}
router.post(
  "/",
  checkLogin,
  checkRole(["admin"]),
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// Module Export:
module.exports = router;
