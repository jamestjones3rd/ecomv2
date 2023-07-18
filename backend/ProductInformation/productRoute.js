//This is where we grab the product information from the Database

import express from "express";
import Product from "./productSchema.js";
import asyncHandler from "../middleware/asyncHandler.js";
const router = express.Router();

router.get(
	"/",
	asyncHandler(async (req, res) => {
		//This will pull the entire product object and store in another object
		const products = await Product.find({});
		res.json(products);
	})
);

export default router;
