const nodemailer = require("nodemailer");

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
      user: 'oyewalefavour424@gmail.com',
      pass: 'qotoypepkuhfiheo',
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
    text: `Hello Brotger ${firstName} ${lastName},\n\nYour message is: ${message}\n\nYour phone number is: ${phone}, We at Rocket Launchpad 🚀 are proud to call you one of ours`,
  };
  Email(options);
};

module.exports = EmailSender;


// 2cst v42d lydr 6vda 6rfc dwht swbg ll75
// qotoypepkuhfiheo