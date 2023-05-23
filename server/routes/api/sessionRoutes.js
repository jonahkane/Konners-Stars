const router = require("express").Router();
const {
  getSessions,
  getSingleSession,
  createSession,
  deleteSession,
} = require("../../controllers/sessionController.js");

// /api/Sessions
router.route("/").get(getSessions).post(createSession);

// /api/Sessions/:SessionId
router.route("/:SessionId").get(getSingleSession).delete(deleteSession);

module.exports = router;
