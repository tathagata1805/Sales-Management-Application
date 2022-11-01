const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("../controllers/itemController");
const router = express.Router();

// ROUTES
// METHOD -> GET / GET ALL ITEMS
router.get("/get-item", getItemController);

// METHOD -> POST / ADD ITEM
router.post("/add-item", addItemController);

// METHOD -> PUT / UPDATE ITEM
router.put("/edit-item", editItemController);

// METHOD -> DELETE / DELETE ITEM
router.post("/delete-item", deleteItemController)
module.exports = router;
