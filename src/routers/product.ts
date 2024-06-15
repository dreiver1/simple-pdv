import Product from '../controlers/Product'
import { Router } from 'express'

const control = new Product()

const app = Router()

app.get('/', control.get)
app.get('/:productId', control.getById)
app.get('/name/:name', control.getByName)
app.post('/', control.post)
app.delete('/:productId', control.delete)
app.put('/:productId', control.put)

export default app