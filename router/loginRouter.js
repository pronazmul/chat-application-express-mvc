// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//Login Page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// Module Export:
module.exports = router;
