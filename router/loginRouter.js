// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const {
  getLogin,
  userLogin,
  userLogout,
} = require("../controller/loginController");
const { redirectLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidator,
  loginValidatorHandler,
} = require("../middlewares/login/loginValidator");

//Login Page
router.get("/", decorateHtmlResponse("Login"), redirectLogin, getLogin);

// User Logged in:
router.post(
  "/",
  decorateHtmlResponse("Login"),
  doLoginValidator,
  loginValidatorHandler,
  userLogin
);

// User Logged Out:
router.delete("/", userLogout);

// Module Export:
module.exports = router;
