const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// import {EmailSender} from "./SendEmail";
const EmailSender = require("./SendEmail");

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const PORT = process.env.PORT || 5000;

//send api
app.post("/send", async (req, res) => {
  try {
    const {firstName,lastName, phone, email, message} = req.body;
    EmailSender({firstName, lastName, phone, email, message})
    res.json({ message: "Your message was sent successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error X " });
  }
});
//f
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
