// External Imports;
const createError = require("http-errors");
const multer = require("multer");
const path = require("path");

// Multer Object Creator:
const multipleUploader = (
  subfolder_path,
  allowed_file_types,
  max_file_size,
  max_number_of_files,
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
      console.log(req.files);
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
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      console.log(req.files);
      if (req.files.length <= max_number_of_files) {
        if (allowed_file_types.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(createError(error_msg));
        }
      } else {
        cb(
          createError(`Maximum ${max_number_of_files} file allowed to upload!`)
        );
      }
    },
  });
  return upload;
};

// Module Exports:
module.exports = multipleUploader;
