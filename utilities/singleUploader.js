// External Imports;
const createError = require("http-errors");
const multer = require("multer");
const path = require("path");

// Multer Object Creator:
const singleUploader = (
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) => {
  // File Upload Folder:
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

  // Define Storage && Custom Unique FileName:
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  //   Prepare Final Multer Upload Object:
  const upload = multer.upload({
    storage: storage,
    limits: {
      file_Size: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });

  return upload;
};

// Module Exports:
module.exports = singleUploader;
