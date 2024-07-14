import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";

const routes = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.route);
});
export const allRoutes = routes;
