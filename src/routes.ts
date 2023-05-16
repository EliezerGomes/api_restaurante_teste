import { Router, Request, Response } from "express";
import { GetProductsController } from "./getProducts/getProductsController";
import { CreateProductController } from "./createProducts/createProductControler";
const routes = Router();

const getProductsController = new GetProductsController()
const createProductsController = new CreateProductController()

routes.get("/products", getProductsController.getProducts)
routes.post("/products", createProductsController.createProduct)

export { routes }