const User = require("../model/User");

module.exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "User not created" });
  }
};

module.exports.signin = (req, res) => {
  res.send("new login");
};

module.exports.signout = (req, res) => {
  res.send("new logout");
};
