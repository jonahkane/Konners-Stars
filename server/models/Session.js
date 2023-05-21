const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sessionSchema = new Schema({
  sessionText: {
    type: String,
    required: 'You need to leave a session!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  sessionAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Session = model('session', sessionSchema);

module.exports = Session;
