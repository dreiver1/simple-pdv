import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authorize = (permission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
      where: { userId: req.body.user.userId},
      include: { Role: { include: { permissions: { include: { Permission: true } } } } }
    });

    if (!user) return res.sendStatus(404)

    const hasPermission = user.Role?.permissions.some(rp => rp.Permission.name === permission)
    if (!hasPermission) return res.sendStatus(403)

    next()
  };
};
