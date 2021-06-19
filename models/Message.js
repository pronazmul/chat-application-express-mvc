// External Modules:
const mongoose = require("mongoose");

// Create Message Schema:
const MessageSchema = mongoose.Schema(
  {
    text: String,
    attachment: [{ type: String }],
    sender: {
      id: mongoose.Types.ObjectId,
      name: String,
      avatar: String,
    },
    receiver: {
      id: mongoose.Types.ObjectId,
      name: String,
      avatar: String,
    },
    date_time: {
      type: Date,
      defaul: Date.now,
    },
    conversation_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create Message Model:
const Message = mongoose.model("Message", MessageSchema);

// Export Model:
module.exports = Message;
