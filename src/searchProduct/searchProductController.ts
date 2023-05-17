import { Request, Response } from "express"
import { SearchProductService } from "./searchProductService"

export class SearchProductsController {
    async searchProduct(request: Request, response: Response){
        const {id} = request.params
        const productService = new SearchProductService()
        const product = await productService.searchProduct(parseInt(id))

        response.json(product)
    }
}