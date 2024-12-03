import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { Product } from "./models/product.js";
import { productRouter } from "./routes/productRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { cartRouter } from "./routes/cartRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import products from "./assets/data.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

const connectDB = async () => {
  mongoose.connection.on("connected", async () => {
    console.log("DB Connected");

    // Check if the products collection is empty
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      try {
        await Product.insertMany(products);
        console.log("Product Added to DB");
      } catch (error) {
        console.error("Error inserting initial products:", error);
      }
    }
  });

  await mongoose.connect(`${process.env.MONGO_URL}/store`);
};
connectDB();

// Middlewares
app.use(express.json());
app.use("/assets", express.static("assets"));
app.use(cors());

// api endPoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT : ${port}`));
