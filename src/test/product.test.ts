
import { describe } from "node:test"
import app from "../app"
import request from "supertest"

const port = 3002

const server = app.listen(port, ()=> {
    console.log(`server is running at http://127.0.0.1:${port}/ `)
})

interface product {
    name: string
    productId?: String
    barcode: string
    costPrice: Number
    description: string
    discount?: Number
    price: Number
    sku: String
    stockQuantity: Number
    weight?: Number
}

describe('test route product', () => {
    var newProduct: product

    const product: product = { 
        name: 'cavalo de troia', 
        barcode: 'AJKSDFLKALKASDFHJ', 
        costPrice: 300, 
        description: 'a product', 
        price: 500, 
        sku: 'AJKSDFLKALKASDFHJAJKSDFLKALKASDFHJ', 
        stockQuantity: 3 
    }

    it('should create a product', async () => {
        const res = await request(server).post('/product').send(product).expect(200)
        newProduct = res.body
        expect(res.body.name === 'house')
    })

    it("should find a product", async () => {
        const product = await request(server).get(`/product/${newProduct.productId}`).expect(200)
        expect(product.body.length == 1)
    })

    it('should not create a product', async () => {
        const res = await request(server).post('/product').send(product).expect(400)
        expect(res.body === 'The product already exist')
    })

    it('should return all products', async () => {
        const res = await request(server).get('/product').expect(200)
        expect(res.body.length >= 1)
    })

    it('should delete a product', async () => {
        const res = await request(server).delete(`/product/${newProduct.productId}`).expect(200)
        expect(newProduct == res.body)
    })
    
    it("shouldn't find a product", async () => {
        const res = await request(server).get(`/product${newProduct.productId}`).expect(404)
        expect(res.body.length == 0)
    })
})