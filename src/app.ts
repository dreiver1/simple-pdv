const express = require('express')
import Category from "./routers/category"
import Product from "./routers/product"
import Item from "./routers/item"
import Order from "./routers/order"
import File from './routers/file'
import cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use('/files', express.static('files'))
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/category', Category)
app.use('/product', Product)
app.use('/item', Item)
app.use('/order', Order)
app.use('/', File)

export default app