// This file will seed all our data to mondodb server
// In other words we import the product.js file information to the database
import dotenv from "dotenv";
import products from "./ProductInformation/product.js";
import Product from "./ProductInformation/productSchema.js";
import connectDB from "./configuration/db.js";

dotenv.config();

connectDB();

//Creates (imports) the Data
const importData = async () => {
	try {
		await Product.deleteMany();

		//This will return the products from product.js file (We use the spread operator to make sure to return the whole product object)
		const sampleProducts = products.map((product) => {
			return { ...product };
		});
		// console.log(sampleProducts);
		//This will add all the data that we collected above and insert it into the Prodcut Model Schema
		await Product.insertMany(sampleProducts);

		//Will be logged if successful
		console.log("Data Imported");
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

//Deletes the Data
const destroyData = async () => {
	try {
		await Product.deleteMany();

		console.log("Data Destroyed!");
		process.exit();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
