import { prisma } from "../database/prisma";

interface IProducts {
    title: string
    price: number
    image: string
    description: string
    amount: number
    categoria: string
}

export class CreateProductsService {
    async createProducts({title, price, image, description,  amount, categoria}: IProducts) {
       
        const product = await prisma.products.create({
            data: {
                title,
                price,
                image,
                description,
                amount,
                categoria
            }
        })

        return product
    }
}