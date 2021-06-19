// External Modules:
const { check, validationResult } = require("express-validator");

// Validate Login Field Data:
const doLoginValidator = [
  check("username")
    .isLength({
      min: 1,
    })
    .withMessage("Mobile Number or Email is Requred!"),
  check("password").isLength({ min: 1 }).withMessage("Password is Required!"),
];

// Handle Login Data Validation Errors:
const loginValidatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: mappedErrors,
    });
  }
};

// Module Export
module.exports = {
  doLoginValidator,
  loginValidatorHandler,
};
