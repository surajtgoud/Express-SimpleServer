const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  //   res.send("<ul><li>Hello Suraj</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating Messages....");
}

module.exports = {
  getMessages,
  postMessages,
};
