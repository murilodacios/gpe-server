import { Router } from "express";
import { jobsRoutes } from "./jobs.routes";
import { usersRoutes } from "./users.routes";
import { demandsRoutes } from './demands.routes'
import { sessionsRoutes } from "./sessions.routes";
import { tasksRoutes } from "./tasks.routes";
import { paymentsRoutes } from "./payments.routes";

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/jobs', jobsRoutes)
routes.use('/demands', demandsRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/tasks', tasksRoutes)
routes.use('/payments', paymentsRoutes)

export { routes }