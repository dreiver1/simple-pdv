const Express = require('express')
import Category from "./routers/category"
import Product from "./routers/product"

const app = Express()
app.use(Express.json())

app.use('/category', Category)
app.use('/product', Product)

export default app