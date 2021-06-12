// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const {
  getInbox,
  searchUser,
  addConversation,
} = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//Inbox Page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// Search For Users to add Conversation:
router.post("/search", checkLogin, searchUser);

// Add user For Conversation:
router.post("/conversation", checkLogin, addConversation);

// Module Export:
module.exports = router;
