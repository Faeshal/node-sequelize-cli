require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const chalk = require("chalk");
const { generateAccessToken } = require("../middleware/auth");
const { User } = require("../models");

// * @route POST /api/auth/register
// @desc    Register New User
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPw = await bcrypt.hash(password, 12);
  const user = await User.create({ email, password: hashedPw });

  // * Generate Access Token Token
  const token = await generateAccessToken(user.id);

  res.status(200).json({
    success: true,
    data: {
      email: user.email,
      token,
    },
  });
});

// * @route POST /api/auth/login
// @desc    Login User
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  let loadedUser;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user === null) {
    return res.status(404).json({
      success: false,
      message: "A user with this email could not be found.",
    });
  }

  loadedUser = user;
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    return res
      .status(401)
      .json({ succes: false, message: "Password is Not Match" });
  }

  // * Generate Access Token
  const token = await generateAccessToken(loadedUser.id);

  res.status(200).json({
    success: true,
    token,
  });
});
