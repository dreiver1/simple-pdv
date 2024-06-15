import Order from '../controlers/Order'
import { Router } from 'express'

const control = new Order()

const app = Router()

app.get('/', control.get)
app.get('/:orderId', control.getById)
app.get('/name/:orderId', control.getByName)
app.post('/', control.post)
app.delete('/:orderId', control.delete)
app.put('/:orderId', control.put)

export default app