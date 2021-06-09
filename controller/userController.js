// External Imports:
const bcrypt = require("bcrypt");

// Internal Modules:
const User = require("../models/People");

// Get User Page page
const getUsers = (req, res, next) => {
  res.render("users");
};

// Add User
const addUser = async (req, res, next) => {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // Save User || Handle User Saving Error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User Was Added Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
};

// Module Export
module.exports = { getUsers, addUser };
