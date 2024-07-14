import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Product Name Required"],
  },
  description: {
    type: String,
    required: [true, "Product description"],
  },
  price: {
    type: Number,
    required: [true, "Price Required"],
  },
  category: {
    type: String,
    required: [true, "Category Required"],
  },
  Qty: {
    type: Number,
    required: [true, "Quantity needed."],
  },
  weight: {
    type: Number,
    required: [true, "weight required"],
  },
  img: {
    type: String,
    required: [true, "Image link needed"],
  },
});

export const Product = model<TProduct>("Product", ProductSchema);
