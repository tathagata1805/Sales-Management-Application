const express = require("express");
const {
  loginController,
  registerController,
} = require("./../controllers/userController");

const router = express.Router();

// ROUTES

// MTHOD -> POST / LOGIN USER
router.post("/login", loginController);

// METHOD -> POST / REGISTER USER
router.post("/register", registerController);

module.exports = router;
