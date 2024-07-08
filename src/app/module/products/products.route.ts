import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductsValidations } from "./products.validation";
import { ProductControllers } from "./products.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductsValidations.createProductSchemaValidation),
  ProductControllers.createProduct
);

router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateProduct);
export const ProductsRouter = router;
