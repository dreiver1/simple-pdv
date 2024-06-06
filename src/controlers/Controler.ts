import { Request, Response } from "express"

interface Controller {
    get (req: Request, res: Response): void
    post(req: Request, res: Response): void
    put(req: Request, res: Response): void
    delete(req: Request, res: Response): void
    getUnique(req: Request, res: Response): void
}

export default Controller