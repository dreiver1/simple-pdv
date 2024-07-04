import Item from '../controlers/Item'
import { Router } from 'express'

const control = new Item()

const app = Router()

app.get('/', control.get)
app.get('/:itemId', control.getById)
app.get('/order/:orderId', control.getByOrder)
app.post('/', control.post)
app.delete('/:itemId', control.delete)
app.put('/:itemId', control.put)

export default app