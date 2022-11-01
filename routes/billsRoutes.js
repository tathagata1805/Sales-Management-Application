const express = require("express");
const { addBillsController, getBillsController } = require("../controllers/billController");
const router = express.Router();

// ROUTES
 // METHOD -> POST / ADD BILLS
router.post("/add-bills", addBillsController)

 // METHOD -> GET / GET BILLS
 router.get("/get-bills", getBillsController);

 module.exports = router