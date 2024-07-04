const Express = require('express')
import Category from "./routers/category"
import Product from "./routers/product"
import Item from "./routers/item"
import Order from "./routers/order"
import cors = require('cors')
const morgan = require('morgan')

const app = Express()
app.use(morgan('dev'))
app.use(Express.json())
app.use(cors())
app.use('/category', Category)
app.use('/product', Product)
app.use('/item', Item)
app.use('/order', Order)

export default app