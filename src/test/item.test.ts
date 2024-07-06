import request from "supertest";
import app from "../app";
import { describe } from "node:test";

const port = 3005
const server = app.listen(port)

interface Item {
    quantity: number
    itemId: string
    productId: string
    orderId: string
}

describe('testing route item', () => {
    beforeAll(async () => {
        const order = await request(server).post('/order');
        newItem = {
          itemId: '',
          orderId: order.body.orderId,
          productId: '8f504097-9374-48b8-8b3c-5ae84f9866ab',
          quantity: 123
        };
      });

    let newItem: Item = {
        itemId: '',
        orderId: '',
        productId: '8f504097-9374-48b8-8b3c-5ae84f9866ab',
        quantity: 123
    }

    it('should get all item', async () => {
        const res = await request(server).get('/item').expect(200)
    })

    it('should create an item', async () => {
        const res = await request(server).post('/item').send(newItem).expect(200)
        newItem.itemId = res.body.itemId
    })

    it('should put an item', async () => {
        newItem.quantity = 50
        const res = await request(server).put(`/item/${newItem.itemId}`).send(newItem).expect(200)
        expect(res.body.quantity === 50)
    })

    it('should delete an item', async () => {
        const res = await request(server).delete(`/item/${newItem.itemId}`).send(newItem).expect(200)
    })

})