// External Module:
const mongoose = require("mongoose");

// Make Conversation Schema:
const ConversationSchema = mongoose.Schema(
  {
    creator: {
      id: mongoose.Types.ObjectId,
      name: String,
      avatar: String,
    },
    participant: {
      id: mongoose.Types.ObjectId,
      name: String,
      avatar: String,
    },
    last_updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Make Convertation Model:
const Conversation = mongoose.model("Conversation", ConversationSchema);

// Model Export
module.exports = Conversation;
