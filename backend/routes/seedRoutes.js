import express from "express";
import data from "../data.js";
const seedRouter = express.Router();

import Product from "../models/productModel.js";
import User from "../models/userModel.js";

seedRouter.get("/", async (req, res) => {
 await Product.remove({});
  const createProducts = await Product.insertMany(data.products);
 await User.remove({});
  const createUser = await User.insertMany(data.users);
  res.send({ createProducts,createUser });
});

export default seedRouter;
