// External Modules:
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  if (cookies) {
    try {
      const token = cookies[process.env.COOKIE_NAME];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      //   Pass User Information to Response Locals Varriable:
      if (res.locals.html) {
        res.locals.loggedInUser = decoded;
      }
      next();
    } catch (error) {}
  } else {
    if (res.locals.html) {
      res.redirect("/");
    } else {
      res.status(401).json({
        error: "Authentication Failure!",
      });
    }
  }
};

const redirectLogin = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
  if (!cookies) {
    next();
  } else {
    res.redirect("/inbox");
  }
};

const checkRole = (role) => (req, res, next) => {
  console.log(req.user);
  if (req.user.role && role.includes(req.user.role)) {
    next();
  } else {
    if (res.locals.html) {
      next(createError(401, "You are not Authorized to access this page!"));
    } else {
      res.status(401).json({
        errors: {
          common: {
            msg: "You are not Authorized To access this page!",
          },
        },
      });
    }
  }
};

// Module Export :
module.exports = { checkRole, checkLogin, redirectLogin };
