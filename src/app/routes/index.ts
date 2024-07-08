import { Router } from "express";
import { ProductsRouter } from "../module/products/products.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
