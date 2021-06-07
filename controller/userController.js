// Get User Page page
const getUsers = (req, res, next) => {
  res.render("users");
};

// Module Export
module.exports = { getUsers };
