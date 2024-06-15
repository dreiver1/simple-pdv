import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./Controler";
import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class Order implements Controller {
    async post(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const order = await prisma.order.create({})
            res.status(200).json(order)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    async get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const order = await prisma.order.findMany()
            if(order.length == 0){
                res.status(404).send('order not found')
            }else{
                res.status(200).json(order)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { orderId } = req.params
            const order = await prisma.order.delete({
                where: {
                    orderId: orderId
                }
            })
            if(order == null || undefined){
                res.status(404).send('order not found')
            }else{
                res.status(200).json(order)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    async getById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { orderId } = req.params
            const order = await prisma.order.delete({
                where: {
                    orderId: orderId
                }
            })
            if(order == null || undefined){
                res.status(404).send('order not found')
            }else{
                res.status(200).json(order)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    async getByName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { orderId } = req.params
            const order = await prisma.order.findFirst({
                where: {
                    orderId: orderId
                }
            })
            if(order == null || undefined){
                res.status(404).send('order not found')
            }else{
                res.status(200).json(order)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    async put(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
        try {
            const { orderId } = req.params
            const order = await prisma.order.findFirst({
                where: {
                    orderId: orderId
                }
            })
            if(order == null || undefined){
                res.status(404).send('order not found')
            }else{
                res.status(200).json(order)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}

export default Order