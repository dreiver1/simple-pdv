import { Router } from "express";
import userController from "../controlers/User";
const app = Router()
const user = new userController()

app.post('/', user.post)
app.get('/', user.get)
app.get('/:userId', user.getById)
app.get('/name/:name', user.getByName)
app.get('/username/:userName', user.getByUserName)
app.put('/:userId', user.put)
app.delete('/:userId', user.delete)

app.post('/login', user.loginUser)


export default app