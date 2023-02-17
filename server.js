const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const path = require("path");

const app = express();

const PORT = 3000;

app.set("view enginer", "hbs");
app.set("views", path.join(__dirname, "views"));

//Middleware in action
app.use((req, res, next) => {
  console.log(`${req.method} and ${req.url} `);
  next();
});
//serving static site from express
app.use("/site", express.static("public"));
//serving hbs tenplate
app.use("/", (req, res) => {
  app.render("index", {
    title: "This Site Is Served By Express",
    caption: "This Site Is Served By Express",
  });
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
