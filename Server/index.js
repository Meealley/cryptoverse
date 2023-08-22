const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// import {EmailSender} from "./SendEmail";
// const EmailSender = require("./SendEmail");
const EmailRoutes = require("./Routes/EmailRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const PORT = process.env.PORT || 5000;

//send api
app.use("/", EmailRoutes);
//f
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
