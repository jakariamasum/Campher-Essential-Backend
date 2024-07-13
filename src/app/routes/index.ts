import { Router } from "express";
import { ProductsRouter } from "../module/products/products.route";
import { PaymentsRouter } from "../module/payment/payment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductsRouter,
  },
  {
    path: "/payments",
    route: PaymentsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
