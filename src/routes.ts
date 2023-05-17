import { Router } from "express";
import { GetProductsController } from "./getProducts/getProductsController";
import { CreateProductController } from "./createProducts/createProductControler";
import { SearchProductsController } from "./searchProduct/searchProductController";
const routes = Router();

const getProductsController = new GetProductsController()
const createProductsController = new CreateProductController()
const searchProductController = new SearchProductsController()

routes.get("/products", getProductsController.getProducts)
routes.get("/products/:id", searchProductController.searchProduct)
routes.post("/products", createProductsController.createProduct)

export { routes }