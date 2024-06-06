const Express = require('express')
import Category from "./routers/category"

const server = Express()
server.use(Express.json())

server.use('/category', Category)

server.listen( 3000, () => {
    console.log('Server running at http://127.0.0.1/3000')
})

export default server