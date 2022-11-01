const express = require("express");
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { bgCyan } = require("colors");
require("colors");
require("dotenv").config();
const connectDb = require("./config/config");

// INIT APP
const app = express();
const PORT = process.env.PORT || 5000;

//EXPRESS MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// ROUTES
app.use("/api/items", require("./routes/itemsRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/bills", require("./routes/billsRoutes"));

// HEROKU CONFIG
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// SERVER CONFIG WITH DB
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`, bgCyan.white);
  connectDb();
});
