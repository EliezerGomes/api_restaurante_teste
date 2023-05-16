import {Request, Response} from "express"
import { CreateProductsService } from "./createProductsService"

export class CreateProductController{
    async createProduct(request: Request, response: Response){
        const { title, price, image, description, amount, categoria } = request.body

        const productsService = new CreateProductsService()
        const products = await productsService.createProducts({title, price, image, description, amount, categoria})

        return response.json(products)
    }
}