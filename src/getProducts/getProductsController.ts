import {Request, Response} from "express"
import { GetProductsService } from "./getProductsService"

export class GetProductsController{
    async getProducts(request: Request, response: Response){
        const getProducts = new GetProductsService()
        const products = await getProducts.getProducts()

        return response.json(products)
    }
}