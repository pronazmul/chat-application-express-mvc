// External Imports:
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const { unlink } = require("fs");

// internal Imports:
const User = require("../../models/People");

// Validate User Data
const addUserValidators = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required!")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anyting other than alphabet")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid Email Address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email already in use!");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", { strictMode: true })
    .withMessage("Mobile number must be a valid Bangladeshi mobile number")
    .custom(async (value) => {
      try {
        const user = await User.findOne({ mobile: value });
        if (user) {
          throw createError("Mobile number is already use!");
        }
      } catch (error) {
        throw createError(error.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 character long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
];

// Handle Form Data Validation Error if occured Unlink Uploaded image:
const addUserValidationHandler = (req, res, next) => {
  // Get complex validation Errors
  const errors = validationResult(req);
  // Syncronise Validation Errors
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    //   Remove Uploaded File
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(`${__dirname}/../public/uploads/avatars/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    // Response The Errors To User:
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};
// Module Exports:
module.exports = {
  addUserValidators,
  addUserValidationHandler,
};
