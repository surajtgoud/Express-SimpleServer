const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();
//route for GET requesting for messages
messagesRouter.get("", messagesController.getMessages);
//route for posting a message
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
