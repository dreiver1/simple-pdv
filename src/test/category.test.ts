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

    let newCategory: Category = {
        categoryId: '',
        name: '',
        parentId: ''
    }


    it('should create a category', async () => {
        const category = { name: 'CategoryOftest' }
        const res = await request(server).post('/category').send(category).expect(200)
        newCategory.categoryId = res.body.categoryId
        newCategory.name = res.body.name
        
        expect(res.body.name === 'CategoryOftest')
    })

    it('should create a category whit parent', async () => {
        const category: Category = { name: 'CategoryOftestChildrem', parentId: newCategory.categoryId, categoryId: ''}
        const res = await request(server).post('/category').send(category).expect(200)        
        expect(res.body.name === 'CategoryOftestChildrem')

        await request(server).delete(`/category/${res.body.categoryId}`).expect(200)
    })

    it('should get a catergory by name', async () => {
        const res = await request(server).get(`/category/name/${newCategory.name}`).expect(200)
        expect(res.body.name === newCategory.name)
    })

    it('should get a catergory by Id', async () => {
        const res = await request(server).get(`/category/${newCategory.categoryId}`).expect(200)
        expect(res.body.name === newCategory.name)
    })

    it('should not create a category', async () => {
        const category = { name: 'CategoryOftest' }
        const res = await request(server).post('/category').send(category).expect(400)
        expect(res.body === 'The category alred exist')
    })

    it('should return all categories', async () => {
        const res = await request(server).get('/category').expect(200)
        expect(res.body.length >= 1)
    })

    it('should delete a category', async () => {
        const category = await request(server).delete(`/category/${newCategory.categoryId}`).expect(200)
        expect(category.body.name === 'CategoryOftest')
    })
})