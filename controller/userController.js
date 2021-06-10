// External Imports:
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");

// Internal Modules:
const User = require("../models/People");

// Get User
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.render("users", {
      users: users,
    });
  } catch (error) {
    next(error);
  }
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

// Get User
const deleteUser = async (req, res, next) => {
  try {
    const users = await User.findByIdAndDelete({ _id: req.params.id });

    // Remove User Avatar if have:
    if (users.avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(200).json({
      message: "User removed successfully!",
    });
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
};

// Module Export
module.exports = { getUsers, addUser, deleteUser };
