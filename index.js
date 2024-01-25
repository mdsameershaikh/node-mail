const express = require("express");
const app = express();
const port = 4000;
const sendMail = require("./controllers/sendMail");
app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/sendmail", sendMail);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log("i am live on port no " + port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
