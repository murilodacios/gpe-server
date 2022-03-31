import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../db/prismaClient";
import { AppError } from "../shared/errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
        
    const authHeader = request.headers.authorization

    if(!authHeader) {
        throw new AppError("Token missing")
    }

    //Bearer 43439493rnr4f

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "0349e1b82f0e13d8088d6cdfe2b2eb67") as IPayload
        
        const user = await prisma.user.findFirst({
            where: {
                id: user_id,
            }
        })
        
        if(!user) {
            throw new AppError("User doesn't exists")
        }

        next()

    } catch {
        throw new AppError("Invalid token")
    }



}