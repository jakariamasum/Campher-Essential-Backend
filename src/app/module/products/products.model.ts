import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new Schema<TProducts>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = model<TProducts>("Product", productSchema);
