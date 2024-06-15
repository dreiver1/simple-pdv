import { PrismaClient } from "@prisma/client";
import Controller from "../controlers/Controler";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
const prisma = new PrismaClient()

class Item implements Controller {

    async getById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { itemId } = req.params
            const item = await prisma.item.findUnique({
                where: {
                    itemId: itemId
                }
            })
            if (item == null || item == undefined) {
                res.status(404).send('item not find')
            } else {
                res.status(200).json(item)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async getByName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { itemId } = req.params
            const item = await prisma.item.findFirst({
                where: {
                    itemId: itemId
                }
            })
            if (item == null || item == undefined) {
                res.status(404).send('item not find')
            } else {
                res.status(200).json(item)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { itemId } = req.params
            const data = await prisma.item.findUnique({
                where: {
                    itemId: itemId
                }
            })
            if (data == null || data == undefined) {
                res.status(404).json('item not find')
            } else {
                const item = await prisma.item.delete({
                    where: {
                        itemId: itemId
                    }
                })
                res.status(200).json(item)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async get(req: Request, res: Response): Promise<void> {
        try {
            const data = await prisma.item.findMany()
            if (data.length == 0) {
                res.status(404).json('item not find')
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
            const { itemId } = req.params
            const item = await prisma.item.findUnique({
                where: {
                    itemId: itemId
                }
            })
            if (item == null || item == undefined) {
                res.status(404).send('item not find')
            } else {
                res.status(200).json(item)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const { OrderId, ProductId, quantity } = req.body
            const item = await prisma.item.create({
                data: {
                    orderOrderId: OrderId,
                    productProductId: ProductId,
                    quantity: quantity
                }
            })
            res.status(200).json(item)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }

    async put(req: Request, res: Response): Promise<void> {
        try {
            const { itemId } = req.params
            const {OrderId, ProductId, quantity} = req.body
            const data = await prisma.item.findMany({
                where: {
                    itemId: itemId
                }
            })
            if(data.length == 0){
                res.status(400).send('the item dont exist')
            }else{
                const item = await prisma.item.update({
                    where: {
                        itemId: itemId
                    },
                    data: {
                        orderOrderId: OrderId,
                        productProductId: ProductId,
                        quantity: quantity
                    }
                })

                res.status(200).json(item)
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}

export default Item