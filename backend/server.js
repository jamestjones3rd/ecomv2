import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configuration/db.js";
import productRoute from "./ProductInformation/productRoute.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send(`API is running...`);
});

app.use("/api/products", productRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
