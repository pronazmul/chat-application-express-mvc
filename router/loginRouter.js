// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const { getLogin, userLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidator,
  loginValidatorHandler,
} = require("../middlewares/login/loginValidator");

//Login Page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// User Logged in:
router.post(
  "/",
  decorateHtmlResponse("Login"),
  doLoginValidator,
  loginValidatorHandler,
  userLogin
);

// Module Export:
module.exports = router;
