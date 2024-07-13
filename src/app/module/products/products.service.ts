import AppError from "../../errors/AppError";
import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find().sort({ createdAt: -1 });
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProducts>) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const updateProductStockIntoDB = async (id: string, quantity: number) => {
  console.log(quantity);
  const product = await Product.findById({ _id: id });
  if (!product) {
    throw new AppError(404, "Product not found");
  }
  product.stock = Math.max(0, product.stock - quantity);
  const result = await product.save();
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  updateProductStockIntoDB,
};
