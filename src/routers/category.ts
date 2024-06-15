import Category from '../controlers/category'
import { Router } from 'express'

const control = new Category()

const app = Router()

app.get('/', control.get)
app.get('/:categoryId', control.getById)
app.post('/', control.post)
app.delete('/:categoryId', control.delete)
app.put('/:categoryId', control.put)
app.get('/name/:name', control.getByName)

export default app