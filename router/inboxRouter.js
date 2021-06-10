// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//Inbox Page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// Module Export:
module.exports = router;
