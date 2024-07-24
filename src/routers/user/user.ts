import { Router } from "express";
import userController from "../../controlers/User/User";
const app = Router()
const user = new userController()

import { authorize } from "../../midleware/authorizate";

app.post('/', authorize('CREATE_USER'), user.post)
app.get('/', user.get)
app.get('/:userId', user.getById)
app.get('/name/:name', user.getByName)
app.get('/username/:userName', user.getByUserName)
app.delete('/:userId', authorize('DELETE_USER'), user.delete)
app.put('/:userId', authorize('UPDATE_USER'), user.put)

app.post('/login', user.loginUser)


export default app