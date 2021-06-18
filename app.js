// External Dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const http = require("http");
const moment = require("moment");

// Internal Dependencies:
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
const server = http.createServer(app);
dotenv.config();

// socket creation
const io = require("socket.io")(server);
global.io = io;

// Moment Set as application local:
app.locals.moment = moment;

// Database Connection
mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully Connected To Database!"))
  .catch((error) => console.log(error));

//   Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookie Data
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing Setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// Not Found Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Application listening to port ${process.env.PORT}`);
});
