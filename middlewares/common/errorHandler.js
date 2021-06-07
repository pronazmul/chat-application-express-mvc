// External Dependencies:
const createError = require("http-errors");

// 404 Not Found Handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Your request content was not found!"));
};

//Default Error Handler
const errorHandler = (error, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? error : { message: error.message };

  res.status(error.status || 500);

  // Conditional Html || Json Resposne
  if (!res.locals.html) {
    res.render("errorPage", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
};

// Module Export
module.exports = {
  notFoundHandler,
  errorHandler,
};
