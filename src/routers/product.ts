import Product from '../controlers/Product'
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express"
const prisma = new PrismaClient()

const control = new Product()

const app = Router()

app.get('/', control.get)
app.get('/:productId', control.getUnique)
app.post('/', control.post)
app.delete('/:productId', control.delete)
app.put('/:productId', control.put)

export default app