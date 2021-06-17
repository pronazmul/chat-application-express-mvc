// Internal Modules
const multipleUploader = require("../../utilities/multipleUploader");

// Pass Attachment Details to Create Multar Upload Object
const attachmentUpload = (req, res, next) => {
  const upload = multipleUploader(
    "attachments",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    2,
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
module.exports = attachmentUpload;
