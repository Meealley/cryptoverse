const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

//=========================================Defining the emailer================================
const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oyewalefavour424@gmail.com",
      pass: "qotoypepkuhfiheo",
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

const EmailSender = ({ firstName, lastName, phone, message }) => {
  const options = {
    from: `Rocket Launchpad 🚀 <${process.env.USER}`,
    to: process.env.SEND_TO,
    subject: `Message from Rocket Launchpad`,
    text: `Hello Brother ${firstName} ${lastName},\n\nYour message is: ${message}\n\nYour phone number is: ${phone}, We at Rocket Launchpad 🚀 are proud to call you one of ours`,
  };
  Email(options);
};

//=================================SendEmail================================
const sendEmail = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;
    EmailSender({ firstName, lastName, phone, email, message });
    res.json({ message: "Your message was sent successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error X " });
  }
});

module.exports = { sendEmail };



// 2cst v42d lydr 6vda 6rfc dwht swbg ll75
// qotoypepkuhfiheo