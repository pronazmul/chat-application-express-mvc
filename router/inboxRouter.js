// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//Inbox Page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

// Module Export:
module.exports = router;
