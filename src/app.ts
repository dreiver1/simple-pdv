const express = require('express')
import Category from "./routers/category"
import Product from "./routers/product"
import Item from "./routers/item"
import Order from "./routers/order"
import File from './routers/file'
import User from './routers/user/user'
import Role from './routers/user/role'
import Permission from './routers/user/permission'
import RolePermission from './routers/user/rolePermission'
import Login from './routers/login'
import cors = require('cors')
import authenticateToken from "./midleware/authenticate"
const morgan = require('morgan')


const app = express()
app.use('/files', express.static('files'))
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/login', Login)

app.use('/user', authenticateToken,  User)
app.use('/Role', authenticateToken, Role)
app.use('/Permission', authenticateToken, Permission)
app.use('/RolePermission',authenticateToken, RolePermission)
app.use('/category', authenticateToken, Category)
app.use('/product', authenticateToken, Product)
app.use('/item', authenticateToken, Item)
app.use('/order', authenticateToken, Order)
app.use('/', authenticateToken, File)


export default app