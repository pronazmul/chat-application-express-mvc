// External Dependencies:
const express = require("express");
const router = express.Router();

// Internal Modules
const {
  getInbox,
  searchUser,
  addConversation,
  getMessages,
  sendMessage,
} = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const attachmentUpload = require("../middlewares/inbox/attachmentUpload");

//Inbox Page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// Search For Users to add Conversation:
router.post("/search", checkLogin, searchUser);

// Add user For Conversation:
router.post("/conversation", checkLogin, addConversation);

// Get Conversation Messages:
router.get("/messages/:conversation_id", checkLogin, getMessages);

// Send Message:
router.post("/message", checkLogin, attachmentUpload, sendMessage);

// Module Export:
module.exports = router;
