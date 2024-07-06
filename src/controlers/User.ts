import { Request, Response } from "express";
import Controller from "./Controler";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
const jwt = require('jsonwebtoken')

const prisma = new PrismaClient()

class userController implements Controller {
    async post(req: Request, res: Response): Promise<void> {
        try {
            const salt = bcrypt.genSaltSync(10)
            const { cpf, data, email, name, password, userName } = req.body
            const userByName = await prisma.user.findUnique({
                where: {
                    userName: userName
                }
            })
            const userByCpf = await prisma.user.findUnique({
                where: {
                    cpf: cpf
                }
            })
            if(userByCpf || userByName){
                 res.status(401).send('userAlreadExist')
            } else {
                if(email.length < 1 || name.length < 1 || password.length < 8 || cpf.length < 11){
                    res.status(401).send('Incorrect form')
                }else{
                    var hash = bcrypt.hashSync(password, salt)
                    const user = await prisma.user.create({
                        data: {
                            cpf,
                            data,
                            email,
                            name,
                            password: hash,
                            userName
                        }
                    })
                    res.status(200).json({
                        userName: user.userName,
                        userId: user.userId
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }

    async getByUserName(req: Request, res: Response): Promise<void> {
        try {
            const { userName } = req.params
            const user = await prisma.user.findFirst({
                where: { userName }
            })
    
            if (!user) {
                res.status(404).send('User not found')
            } else {
                res.status(200).json(user)
            }
        } catch (error) {
            res.status(500).send('Error retrieving user')
    }}

    async put(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params
            const { data, email, name, userName } = req.body
            const user = await prisma.user.findUnique({
                where: {
                    userId: userId
                }
            })

            if(!user){
                res.status(401).send('user Not Exist')
            }else if (email.length < 1 || name.length < 1 ) {
                res.status(401).send('Incorrect form')
            } else {
                const updatedUser = await prisma.user.update({
                    where: { userId },
                    data: {
                        data,
                        email,
                        name,
                        userName
                    }
                })
                res.status(200).json(updatedUser)
            }
        } catch (error) {
            res.status(500).send('Error updating user')
    }}

    async get(req: Request, res: Response): Promise<void> {
        try {
            const user = await prisma.user.findMany()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).send('Error retrieving user')
    }}

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params
            const user = await prisma.user.findUnique({
                where: { userId }
            })
            if (!user) {
                res.status(404).send('User not found')
            } else {
                res.status(200).json(user)
            }
        } catch (error) {
            res.status(500).send('Error retrieving user')
    }}
    async getByName(req: Request, res: Response): Promise<void> {
        try {
            const { name } = req.params
            const user = await prisma.user.findFirst({
                where: { name }
            })
    
            if (!user) {
                res.status(404).send('User not found')
            } else {
                res.status(200).json(user)
            }
        } catch (error) {
            res.status(500).send('Error retrieving user')
    }}

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params
            const user = await prisma.user.delete({
                where: { userId }
            })
            res.status(200).send('User deleted successfully')
        } catch (error) {
            res.status(500).send('Error deleting user')
    }}

    async loginUser (req: Request, res: Response) {
        try {
            const { email, password } = req.body
    
            if (!email || !password) {
                return res.status(401).send('Email and password are required')
            }
    
            const user = await prisma.user.findUnique({
                where: { email }
            })
    
            if (!user) {
                return res.status(401).send('User not found')
            }
    
            const isPasswordValid = bcrypt.compareSync(password, user.password)
    
            if (!isPasswordValid) {
                return res.status(401).send('Invalid password')
            }
    
            const token = jwt.sign({ userId: user.userId }, 'your_jwt_secret', { expiresIn: '1h' })
    
            res.status(200).json({ token: token })
        } catch (error) {
            res.status(500).send('Error logging in user')
}}}
export default userController