// Internal Modules
const singleUploader = require("../../utilities/singleUploader");

// Pass Single Uploder to Create Multar Upload Object
const avatarUpload = (req, res, next) => {
  const upload = singleUploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // Call The Multer Upload MiddleWare Function To Handle Error:
  upload.any()(req, res, (error) => {
    if (error) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: error.message,
          },
        },
      });
    } else {
      next();
    }
  });
};

// Module Exports
module.exports = avatarUpload;
