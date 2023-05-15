import { Router } from "express";
import { GetProductsController } from "./getProducts/getProductsController";
const routes = Router();

const getProductsController = new GetProductsController()

routes.get("/products", getProductsController.getProducts)

export { routes }