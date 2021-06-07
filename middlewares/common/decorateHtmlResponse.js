// This Middleware Set Html Title for ejs View:
function decorateHtmlResponse(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
    next();
  };
}

// Module Export
module.exports = decorateHtmlResponse;
