import multer from 'multer'
import path from 'path'

import { Router } from 'express'

const storeage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('files'))
    },
    filename: (req, file, callback)=> {
        const time = new Date().getTime()
        callback(null, `${time}_${file.originalname}`)
    }
})

const upload = multer({ storage: storeage })
const route = Router()

route.post('/upload', upload.single('file'), (req, res) => {
    return res.json(req.file?.filename)
})


export default route
