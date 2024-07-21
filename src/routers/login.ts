import { Router } from "express"
import userController from "../controlers/User"

const app = Router()
const controler = new userController()

app.post('/', controler.loginUser)
app.post('/refreshToken', controler.refreshTokens)
  

export default app