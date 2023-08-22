const express = require("express");
const router = express.Router();
const { sendEmail } = require("../Controllers/EmailController");

router.post("/send", sendEmail);

module.exports = router;
