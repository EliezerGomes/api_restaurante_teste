import { prisma } from "../database/prisma"


export class SearchProductService {
    async searchProduct(id: number) {
        const searchProduct = await prisma.products.findUnique({
            where: {
               id
            }
        })

        return searchProduct
    }
}