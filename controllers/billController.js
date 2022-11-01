const billsModel = require("../models/billModel");

const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill created Successfully");
  } catch (error) {
    res.send("Somethinng went wrong");
    console.log(error);
  }
};

const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    res.send("Somethinng went wrong");
    console.log(error);
  }
};

module.exports = {
  getBillsController,
  addBillsController,
};
