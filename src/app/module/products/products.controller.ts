import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./products.service";
import AppError from "../../errors/AppError";

const createProduct = catchAsync(async (req, res) => {
  console.log(req.body);
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
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single product retrived successfully",
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }
});

const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const payload = req.body;
  const result = await ProductService.updateProductIntoDB(productId, payload);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }
});

const updateProductStock = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const result = await ProductService.updateProductStockIntoDB(
    productId,
    quantity
  );
  console.log(result);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product stock updated successfully",
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }
});

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductService.deleteProductIntoDB(productId);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  updateProductStock,
};
