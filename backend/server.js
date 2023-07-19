import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configuration/db.js";
import productRoute from "./ProductInformation/productRoute.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
// this is for deployment
if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve();
	app.use('/uploads', express.static('/var/data/uploads'));
	app.use(express.static(path.join(__dirname, '/frontend/build')));
  
	app.get('*', (req, res) =>
	  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
  } else {
	const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
	app.get('/', (req, res) => {
	  res.send('API is running....');
	});
  }

app.get("/", (req, res) => {
	res.send(`API is running...`);
});

app.use("/api/products", productRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
