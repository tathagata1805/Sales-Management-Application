const mongoose = require("mongoose");
require("colors");

// DB CONNECTION

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://tathagata011:tathagata011@cluster0.c7q7hjc.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
