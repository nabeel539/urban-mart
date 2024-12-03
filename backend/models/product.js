// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   image: String, // store paths to images
//   category: String,
//   subCategory: String,
//   rating: Number,
//   reviews: [
//     {
//       user: String,
//       comment: String,
//       rating: Number,
//     },
//   ],
//   inStock: Boolean,
//   freeShipping: Boolean,
// });

// export const Product = mongoose.model("Product", productSchema);
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discountPrice: {
    type: Number,
    default: null,
  },
  discountPercentage: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    required: true, // Path to product image
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    default: null, // Optional subcategory
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
    },
  ],
  inStock: {
    type: Boolean,
    default: true, // Whether the product is available
  },
  freeShipping: {
    type: Boolean,
    default: false, // Whether free shipping is offered
  },
});

export const Product = mongoose.model("Product", productSchema);
