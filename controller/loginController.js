// External Modules:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// Internal Modules:
const User = require("../models/People");

// Get Login page
const getLogin = (req, res, next) => {
  res.render("index");
};

// User Login:
const userLogin = async (req, res, next) => {
  try {
    // Find user using email || mobile
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        // Prepare Logged in user object to generate token
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };

        // Generate Token:
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        // Set Cookies:
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        // Set Logged in user as local Identifier:
        res.locals.loggedInUser = userObject;
        res.render("inbox");
      } else {
        throw createHttpError("Login Failed! Please Try Again");
      }
    } else {
      throw createError("Login Failed! Please Try Again");
    }
  } catch (error) {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: {
        common: {
          msg: error.msg,
        },
      },
    });
  }
};

// Module Export
module.exports = { getLogin, userLogin };
