import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express"

import Controler from './Controler'
const prisma = new PrismaClient()

class Category implements Controler {
    async get(req: Request, res: Response) {
        try {
            const data = await prisma.category.findMany()
            res.json(data).status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async post(req: Request, res: Response) {
        try {
            const data = await prisma.category.create({
                data: {
                    name: req.body.name,
                    parentId: req.body.parentId
                }
            })
            res.json(data).status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async put(req: Request, res: Response) {
        try {
            const data = await prisma.category.update({
                where: {
                    categoryId: req.body.categoryId
                },
                data: {
                    name: req.body.name,
                    parentId: req.body.parentId
                }
            })
            res.json(data).status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async delete(req: Request, res: Response) {
         try {
            const data = await prisma.category.delete({
                where: {
                    categoryId: req.body.categoryId
                }
            })
            res.json(data).status(200)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default Category