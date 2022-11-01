const itemModel = require("../models/itemModel");

// GET ITEMS
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

// ADD ITEMS
const addItemController = async (req, res) => {
  try {
    const newItems = new itemModel(req.body);
    await newItems.save();
    res.status(201).send("Item Added Successfully!");
  } catch (error) {
    res.status(400).send("An Error has occured", error);
    console.log(error);
  }
};

// EDIT ITEMS
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    });

    res.status(201).send("Item Updated Successfully");
  } catch (error) {
    res.status(400).send("An Error has occured", error);
    console.log(error);
  }
};

// DELETE ITEM
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndDelete({ _id: itemId });

    res.status(200).send("Ttem Deleted Successfully");
  } catch (error) {
    res.status(400).send("An Error has occured", error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
