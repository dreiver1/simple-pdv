import { Router } from "express"
import Role from '../../controlers/User/Role'

const app = Router()

const controller = new Role()

app.get('/', controller.get )
app.post('/', controller.post)
app.delete('/:id', controller.delete)
app.put('/:id', controller.put)
app.get('/:id', controller.getById)
app.get('/name/:name', controller.getByName)

export default app