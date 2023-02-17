const express = require("express");
const friendsController = require("../controllers/friends.controller");

//route for POST request for adding friends
const friendsRouter = express.Router();
friendsRouter.post("/", friendsController.postFriends);

//route for GET requests for Friends
friendsRouter.get("/", friendsController.getFriends);

//route for GET request to get a specific friend with friendId
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
