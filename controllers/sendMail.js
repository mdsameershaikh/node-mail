const nodeMailer = require("nodemailer");

const sendMail = async (req, res) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "justyn.langworth@ethereal.email",
      pass: "Y4by6YyPkyPyzX3mj3",
    },
  });
  const info = await transporter.sendMail({
    from: "sameer shaikh<shaikhs975@gmail.com>",
    to: "shaikhs975@gmail.com",
    subject: "this is a test node mail",
    text: "hello sameer this is a test email form you node aplication",
    html: "<b>Hello sameer</b>",
  });
  console.log("message sent: " + info.messageId);
  res.json(info);
};

module.exports = sendMail;
