import { describe } from "node:test"
import app from "../app"
import request from "supertest"

interface Order {
    orderId: string
    date: number
    status: string
    paypamentMethod: string
}

const port = 3004

const server = app.listen(port)

describe('this is a teste for route order', ()=> {
    const order: Order = {
        date: Date.now(),
        paypamentMethod: '',
        status: '',
        orderId: ''
    }

    it('should create an order', async () => {
        const res = await request(server).post('/order').send(order).expect(200)
        order.orderId = res.body.orderId
    })

    it('should get an order', async () => {
        const res = await request(server).get(`/order/${order.orderId}`).expect(200)
        expect(res.body.orderId === order.orderId)
    })

    it('should put an order', async () => {
        order.status = 'concluded'
        const res = await request(server).put(`/order/${order.orderId}`).send(order).expect(200)
        expect(res.body.status === 'concluded')
    })

    it('should delete an order', async () => {
        const res = await request(server).delete(`/order/${order.orderId}`).expect(200)
    })
})