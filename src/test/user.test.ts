import { describe } from "node:test"
import app from "../app"
import request from "supertest"

const port = 3003

const server = app.listen(port)


interface User {
    userId: string
    name: string
    password: string
    userName: string
    email: string
    data: string
    cpf: string
}

describe('test User routers', ()=> {

    const user: User = {
        cpf: '12345678910',
        data: '171020',
        email: 'email@teste.com',
        name: 'usuario teste',
        password: 'password123',
        userName: 'testing123',
        userId: '123'
    }

    it('should create an user', async () => {
        const res = await request(server).post('/user').send(user).expect(200)
        user.userId = res.body.userId
        expect(res.body.userId)
    })

    it('should not create a duplicated user', async () => {
        const res = await request(server).post('/user').send(user).expect(401)
    })

    it('should not create an user whit erro in constraints', async () => {
        const newUser = {
            cpf: '1234',
            data: '171020',
            email: 'email@teste.com',
            name: 'usuario teste',
            password: 'pass',
            userName: 'testing123',
            userId: '123'
        }
        await request(server).post('/user').send(newUser).expect(401)
    })

    it('should receive all users', async ()=>{
        const res = await request(server).get('/user').expect(200)
        expect(res.body.length >= 1)
    })

    it('should receive an user by ID', async () => {
        const res = await request(server).get(`/user/${user.userId}`).expect(200)
        expect(res.body.userId === user.userId )
    })

    it('shouldnt receive an user by ID', async () => {
        const res = await request(server).get(`/user/${user.userId + 'error' }`).expect(404)
        expect(res.body.userId === user.userId )
    })

    it('should receive an user by userName', async () => {
        const res = await request(server).get(`/user/userName/${user.userName}`).expect(200)
        expect(res.body.userName === user.userName )
    })

    it('shouldnt receive an user by userName', async () => {
        const res = await request(server).get(`/user/userName/${user.userName + 'error'}`).expect(404)
        expect(res.body.userName === user.userName )
    })

    it('should receive an user by name', async () => {
        const res = await request(server).get(`/user/name/${user.name}`).expect(200)
        expect(res.body.name === user.name )
    })

    it('should put a name of user', async ()=> {
        user.name = 'usuario teste putado'
        const res = await request(server).put(`/user/${user.userId}`).send(user).expect(200)
        expect(user.name === 'usuario teste putado')
    })

    it('shouldnt put a name of user', async ()=> {
        user.name = 'usuario teste putado'
        const res = await request(server).put(`/user/${user.userId + 'erro'}`).send(user).expect(401)
    })

    it('should login an user', async () => {
        const form = {
            email: user.email,
            password: user.password
        }
        const res = await request(server).post('/user/login').send(form).expect(200)
        expect(res.body.token.length > 1)
    })

    it('should delete an user', async () => {
        const res = await request(server).delete(`/user/${user.userId}`).expect(200)
        console.log(user.userId)
        expect(res.body === 'User deleted successfully')
    })
})
