import { Router } from "express";
import { SessionUserController } from "../../../modules/users/sessionUser/SessionUserController";

const sessionsRoutes = Router()

const sessionUserController = new SessionUserController()

sessionsRoutes.post('/', sessionUserController.handle)

export { sessionsRoutes } 