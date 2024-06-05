import { describe } from "node:test"
import main from "../main"
import request from "supertest"

describe('test route category', ()=> {
    it('shold not create a category', async () => {
        const category = { name: 'house' }
        const res = request(main).post('/category').send(category).expect(401)
    })
    it('shold return all categories', async () => {
        const category = { name: 'house' }
        const res = request(main).get('/category').expect(200)
    })
})