const Users = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User with this E-mail does not exist !!",
      status: "fail",
    });
  }
  const validate = await bcrypt.compare(password, user.password);
  if (!validate) {
    return res
      .status(403)
      .json({ message: "Invalid Password, try again !!", status: "fail" });
  }

  const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
    expiresIn: "4d",
  });
  return res.status(200).json({ status: "success", token, name: user.name });
};

const signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  const isExistingUser = await Users.find({ email });
  if (isExistingUser.length !== 0) {
    return res.status(409).json({
      message: "User with given Email already exist",
      status: "fail",
    });
  }
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = {
    email: email,
    password: hashedPassword,
    name: name,
  };
  let newUser = new Users(user);

  newUser
    .save()
    .then(() => {
      res
        .status(200)
        .json({ message: "User SignedUp successfully", status: "success" });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ message: "Something went wrong", status: "fail" });
    });
};

module.exports = { loginUser, signupUser };
