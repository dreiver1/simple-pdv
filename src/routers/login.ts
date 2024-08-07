import { Router } from "express"
import userController from "../controlers/User/User"

const app = Router()
const controler = new userController()

app.post('/', controler.loginUser)
app.post('/refresh', controler.refreshTokens)
  

export default app