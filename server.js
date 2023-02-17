const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

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
app.use("/friends", friendsRouter);

// Messages Routes
app.use("/messages", messagesRouter);

//starting server to listen at port mentioned
app.listen(PORT, () => {
  console.log(`Server is live on Port number:${PORT}`);
});
