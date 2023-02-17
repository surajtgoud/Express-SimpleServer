const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Alice",
    age: 25,
    gender: "Female",
    hometown: "New York",
    interests: ["Reading", "Traveling", "Cooking"],
  },
  {
    id: 1,
    name: "Bob",
    age: 30,
    gender: "Male",
    hometown: "Los Angeles",
    interests: ["Sports", "Music", "Movies"],
  },
  {
    id: 2,
    name: "Charlie",
    age: 28,
    gender: "Male",
    hometown: "Chicago",
    interests: ["Hiking", "Photography", "Painting"],
  },
];
//Middleware in action
app.use((req, res, next) => {
  console.log(`${req.method} and ${req.url} `);
  next();
});

//Middleware for parsing req.body json
app.use(express.json());

//Route for POST request for adding friends
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "In correct input",
    });
  }
  let friend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(friend);
  res.send(friend);
});

//routes for GET requests for Friends
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/message", (req, res) => {
  res.send("Watsup baby boy!");
});

app.get("/help", (req, res) => {
  res.send("I have no money to help you baby!");
});

app.listen(PORT, () => {
  console.log(`Server is live on Port number:${PORT}`);
});
