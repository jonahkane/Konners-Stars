const { Session, User } = require("../models");

module.exports = {
  // Get all sessions
  getSessions(req, res) {
    Session.find()
      .then((sessions) => res.json(sessions))
      .catch((err) => res.status(500).json(err));
  },
  // Get a session
  getSingleSession(req, res) {
    Session.findOne({ _id: req.params.sessionId })
      .select("-__v")
      .then((session) =>
        !session
          ? res.status(404).json({ message: "No session with that ID" })
          : res.json(session)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a session
  createSession(req, res) {
    Session.create(req.body)
      .then((session) => res.json(session))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a session
  deleteSession(req, res) {
    Session.findOneAndDelete({ _id: req.params.sessionId })
      .then((session) =>
        !session
          ? res.status(404).json({ message: "No session with that ID" })
          : User.deleteMany({ _id: { $in: session.users } })
      )
      .then(() => res.json({ message: "Sessions and Users deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a session
  updateSession(req, res) {
    Session.findOneAndUpdate(
      { _id: req.params.sessionId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((session) =>
        !session
          ? res.status(404).json({ message: "No session with this id!" })
          : res.json(session)
      )
      .catch((err) => res.status(500).json(err));
  },
};
