
import Category from '../controlers/category'
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express"
const prisma = new PrismaClient()

const control = new Category()

const app = Router()

app.get('/', control.get)
app.get('/:name', control.getUnique)
app.post('/', control.post)
app.delete('/:categoryId', control.delete)
app.put('/:categoryId', control.put)

export default app