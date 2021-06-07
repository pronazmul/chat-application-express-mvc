// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const { getUsers } = require("../controller/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Get User Page
router.get("/", decorateHtmlResponse("User"), getUsers);

// Module Export:
module.exports = router;
