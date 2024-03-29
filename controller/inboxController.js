// External Module:
const createError = require("http-errors");

// Internal Module
const escape = require("../utilities/escape");
const User = require("../models/People");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

// Get Inbox Page page
const getInbox = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({
      $or: [
        { "creator.id": req.user.userid },
        { "participant.id": req.user.userid },
      ],
    }).sort("-createdAt");
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

// Get Messages:
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      conversation_id: req.params.conversation_id,
    }).sort("-createdAt");

    const { participant } = await Conversation.findById(
      req.params.conversation_id
    );
    res.status(200).json({
      data: {
        messages: messages,
        participant,
      },
      user: req.user.userid,
      conversation_id: req.params.conversation_id,
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown Error Occured!",
        },
      },
    });
  }
};

// Send Message:
const sendMessage = async (req, res, next) => {
  if (req.body.message || (req.files && req.files.length > 0)) {
    try {
      // save message text/attachment in database
      let attachments = null;

      if (req.files && req.files.length > 0) {
        attachments = [];

        req.files.forEach((file) => {
          attachments.push(file.filename);
        });
      }

      const newMessage = new Message({
        text: req.body.message,
        attachment: attachments,
        sender: {
          id: req.user.userid,
          name: req.user.username,
          avatar: req.user.avatar || null,
        },
        receiver: {
          id: req.body.receiverId,
          name: req.body.receiverName,
          avatar: req.body.avatar || null,
        },
        conversation_id: req.body.conversationId,
      });

      const result = await newMessage.save();

      // emit socket event
      global.io.emit("new_message", {
        message: {
          conversation_id: req.body.conversationId,
          sender: {
            id: req.user.userid,
            name: req.user.username,
            avatar: req.user.avatar || null,
          },
          message: req.body.message,
          attachment: attachments,
          date_time: result.date_time,
        },
      });

      res.status(200).json({
        message: "Successful!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        errors: {
          common: {
            msg: err.message,
          },
        },
      });
    }
  } else {
    res.status(500).json({
      errors: {
        common: "message text or attachment is required!",
      },
    });
  }
};

// Delete Messages:
const deleteMessage = async (req, res, next) => {
  try {
    const [{ attachment }] = await Message.find({
      conversation_id: req.params.conversation_id,
    });

    // const attachments = await messages
    //   .map((item) => item.attachment)
    //   .filter((item) => item != null)
    //   .flat();

    console.log(attachment);
  } catch (error) {
    console.log(error);
  }
};

// Module Export:
module.exports = {
  sendMessage,
  getMessages,
  getInbox,
  searchUser,
  addConversation,
  deleteMessage,
};
