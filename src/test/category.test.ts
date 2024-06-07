import { describe } from "node:test"
import app from "../app"
import request from "supertest"

const port = 3001

const server = app.listen(port, ()=> {
    console.log(`server is running at http://127.0.0.1:${port}/ `)
})

interface Category {
    name: string
    categoryId: String
    parentId: String
}

describe('test route category', ()=> {

    it('should create a category', async () => {
        const category = { name: 'house' }
        const res = await request(server).post('/category').send(category).expect(200)
        expect(res.body.name === 'house')
    })

    it('should not create a category', async () => {
        const category = { name: 'house' }
        const res = await request(server).post('/category').send(category).expect(400)
        expect(res.body === 'The category alred exist')
    })

    it('should return all categories', async () => {
        const res = await request(server).get('/category').expect(200)
        expect(res.body.length >= 1)
    })

    it('should delete a category', async () => {
        let data: Category
        const res = await request(server).get(`/category/house`).expect(200)
        const category = await request(server).delete(`/category/${res.body.categoryId}`)
        expect(category.body.name === 'house')
    })
})