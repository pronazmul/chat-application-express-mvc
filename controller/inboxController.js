// Internal Module
const escape = require("../utilities/escape");
const User = require("../models/People");
const Conversation = require("../models/Conversation");
const createError = require("http-errors");

// Get Inbox Page page
const getInbox = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({
      $or: [
        { "creator.id": req.user.userid },
        { "participant.id": req.user.userid },
      ],
    });
    res.locals.data = conversations;
    res.render("inbox");
  } catch (error) {
    next(error);
  }
};

// User Search To add Conversation:
const searchUser = async (req, res, next) => {
  const user = req.body.user;
  const searchQuery = user.replace("+880", "");

  const name_search_regex = new RegExp("^" + escape(searchQuery), "i");
  const mobile_search_regex = new RegExp("^" + escape("+880" + searchQuery));
  const email_search_regex = new RegExp("^" + escape(searchQuery) + "$", "i");

  try {
    if (searchQuery !== "") {
      const users = await User.find(
        {
          $or: [
            { name: name_search_regex },
            { email: email_search_regex },
            { mobile: mobile_search_regex },
          ],
        },
        "name avatar"
      );
      res.status(200).json(users);
    } else {
      throw createError("You must have to provide some text to search!");
    }
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

// Add conversation
const addConversation = async (req, res, next) => {
  try {
    const newConversation = new Conversation({
      creator: {
        id: req.user.userid,
        name: req.user.username,
        avatar: req.user.avatar || null,
      },
      participant: {
        name: req.body.participant,
        id: req.body.id,
        avatar: req.body.avatar || null,
      },
    });
    const result = newConversation.save();
    res.status(200).json({
      message: "Conversation Added Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};

// Module Export
module.exports = { getInbox, searchUser, addConversation };
