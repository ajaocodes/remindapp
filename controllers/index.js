// inside of controllers/index.js

function index(req, res) {
  // console.log(req.user);
  // console.log("req.user inside index controller: ", req.user);

  let username;
if (req.user) {
    username = req.user.username;
} else {
  username = "Please Log in or Sign up"
}
  res.render("index", {username: username, currentUser: req.user});
}

module.exports = {
  index,
};
