const express = require("express");

const friendsController = require("./controllers/friends.controller");

const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

//Middleware in action
app.use((req, res, next) => {
  console.log(`${req.method} and ${req.url} `);
  next();
});

//Middleware for parsing req.body json
app.use(express.json());

// Friends Routes
//route for POST request for adding friends
app.post("/friends", friendsController.postFriends);

//route for GET requests for Friends
app.get("/friends", friendsController.getFriends);

//route for GET request to get a specific friend with friendId
app.get("/friends/:friendId", friendsController.getFriend);

// Messages Routes
//route for GET requesting for messages
app.get("/messages", messagesController.getMessages);
//route for posting a message
app.post("/messages", messagesController.postMessages);

//starting server to listen at port mentioned
app.listen(PORT, () => {
  console.log(`Server is live on Port number:${PORT}`);
});
