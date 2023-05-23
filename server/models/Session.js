const { Schema, model } = require("mongoose");

// Schema to create a course model
const sessionSchema = new Schema({
  sessionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  sessionName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 4,
    default: "Unnamed session",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    require: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  sessionData: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const session = model("session", sessionSchema);

module.exports = session;
