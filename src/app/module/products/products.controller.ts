import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./products.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductService.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrived successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  const result = await ProductService.getSingleProductFromDB(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single product retrived successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
