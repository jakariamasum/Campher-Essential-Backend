import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
};
