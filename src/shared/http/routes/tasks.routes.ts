import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CheckTaskAsDoneController } from "../../../modules/tasks/checkTaskAsDone/CheckTaskAsDoneController";
import { CreateTaskController } from "../../../modules/tasks/createTask/CreateTaskController";
import { ListTasksController } from "../../../modules/tasks/listTasks/ListTasksController";

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const listTasksController = new ListTasksController()
const checkTaskAsDoneController = new CheckTaskAsDoneController()

tasksRoutes.post("/:userId", ensureAuthenticated, createTaskController.handle)
tasksRoutes.get("/:userId", ensureAuthenticated, listTasksController.handle)

//Check task

tasksRoutes.put("/check/:id", ensureAuthenticated, checkTaskAsDoneController.handle)

export { tasksRoutes } 