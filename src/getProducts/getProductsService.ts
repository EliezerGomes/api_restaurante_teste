import { prisma } from "../database/prisma";

export class GetProductsService {
    async getProducts(){
        const products = await prisma.products.findMany()

        return products
    }
}