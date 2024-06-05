
import Category from '../controlers/category'
import { Router } from 'express'

const control = new Category()

const app = Router()

app.get('/', control.get)
app.post('/', control.post)
app.delete('/', control.delete)
app.put('/', control.put)

export default app