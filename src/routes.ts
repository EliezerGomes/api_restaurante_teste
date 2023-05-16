import { Router, Request, Response } from "express";
import { GetProductsController } from "./getProducts/getProductsController";
import { CreateProductController } from "./createProducts/createProductControler";
const routes = Router();

const getProductsController = new GetProductsController()
const createProductsController = new CreateProductController()

routes.get("/products", getProductsController.getProducts)
routes.post("/products", createProductsController.createProduct)

export { routes }

module.exports = (req: Request, res: Response) => {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code

 //Preflight CORS handler
    if(req.method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
    }

}