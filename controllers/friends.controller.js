const friends = require("../models/friends.model");
function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}
function postFriends(req, res) {
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
}

module.exports = {
  getFriends,
  postFriends,
  getFriend,
};
