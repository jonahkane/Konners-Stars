const { Schema, model } = require("mongoose");

// Schema to create Student model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  },
  password: {
    type: String,
    required: true,
    min_length: 5,
  },
  /* aboutMe: {
    type: String,
    required: false,
    min_length: 1,
    max_length: 250,
  }, */
  makeSessions: [sessionSchema],
});

const User = model("user", userSchema);

module.exports = User;
