import { Router } from "express";
import { ProductControllers } from "./product.controller";

const routes = Router();

routes.post("/create-new-product", ProductControllers.createNewProduct);

routes.get("/get-all", ProductControllers.getAllProducts);

routes.post("/insert-many-products", ProductControllers.insertManyProducts);

routes.get("/get-product/:id", ProductControllers.getSingleProductbyID);

routes.get("/latest-products", ProductControllers.getLatestProducts);

routes.post("/update-many", ProductControllers.updateProducts);

export const productRoutes = routes;
