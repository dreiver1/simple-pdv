import { describe } from "node:test"
import main from "../main"
import request from "supertest"

interface Category {
    name: string
    categoryId: String
    parentId: String
}

describe('test route category', ()=> {
    it('shold create a category', async () => {
        const category = { name: 'house' }
        const res = await request(main).post('/category').send(category).expect(200)
        expect(res.body.name === 'house')

    })
    it('shold not create a category', async () => {
        const category = { name: 'house' }
        const res = await request(main).post('/category').send(category).expect(400)
        expect(res.body === 'The category alred exist')
    })
    it('shold return all categories', async () => {
        const category = { name: 'house' }
        await request(main).get('/category').expect(200)
    })
    it('shold delete a category', async () => {
        let data: Category
        const res = await request(main).get(`/category/house`).expect(200)
        request(main).delete(`/category/${res.body.categoryId}`)
    })
})