import { PrismaClient } from "@prisma/client";
import Controller from "../controlers/Controler";
import { Request, Response } from "express";
const prisma = new PrismaClient()

class Product implements Controller {

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { productId } = req.params
            const data = await prisma.product.findUnique({
                where: {
                    productId: productId
                }
            })
            if (data == null || data == undefined) {
                res.status(404).json('product not find')
            } else {
                const product = await prisma.product.delete({
                    where: {
                        productId: productId
                    }
                })
                res.status(200).json(product)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async get(req: Request, res: Response): Promise<void> {
        try {
            const data = await prisma.product.findMany()
            if (data.length == 0) {
                res.status(404).json('product not find')
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async getUnique(req: Request, res: Response): Promise<void> {
        try {
            const { productId } = req.params
            const product = await prisma.product.findUnique({
                where: {
                    productId: productId
                }
            })
            if (product == null || product == undefined) {
                res.status(404).send('product not find')
            } else {
                res.status(200).json(product)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const {name, barcode, costPrice, description, discount, price, sku, stockQuantity, weight, categoryId} = req.body
            const data = await prisma.product.findMany({
                where: {
                    name: name
                }
            })
            if(data.length >= 1){
                res.status(400).send('The product already exist')
            }else{
                const product = await prisma.product.create({
                    data: {
                        name: name,
                        barcode: barcode,
                        costPrice: costPrice,
                        description: description,
                        discount: discount,
                        price: price,
                        sku: sku,
                        stockQuantity: stockQuantity,
                        weight: weight,
                        categoryId: categoryId
                    }
                })

                res.status(200).json(product)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
    async put(req: Request, res: Response): Promise<void> {
        try {
            const { productId } = req.params
            const {name, barcode, costPrice, description, discount, price, sku, stockQuantity, weight, categoryId} = req.body
            const data = await prisma.product.findMany({
                where: {
                    productId: productId
                }
            })
            if(data.length == 0){
                res.status(400).send('the product dont exist')
            }else{
                const product = await prisma.product.update({
                    where: {
                        productId: productId
                    },
                    data: {
                        name: name,
                        barcode: barcode,
                        costPrice: costPrice,
                        description: description,
                        discount: discount,
                        price: price,
                        sku: sku,
                        stockQuantity: stockQuantity,
                        weight: weight,
                        categoryId: categoryId
                    }
                })

                res.status(200).json(product)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}

export default Product