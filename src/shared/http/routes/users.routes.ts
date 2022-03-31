import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../modules/users/createUser/CreateUserController";
import { ListOneUserController } from "../../../modules/users/listOneUser/ListOneUserController";
import { ListUsersController } from "../../../modules/users/listUsers/ListUsersController";

const usersRoutes = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const listOneUserController = new ListOneUserController()

usersRoutes.post("/", ensureAuthenticated, createUserController.handle)
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle)
usersRoutes.get('/me/:email', ensureAuthenticated, listOneUserController.handle)

export { usersRoutes } 