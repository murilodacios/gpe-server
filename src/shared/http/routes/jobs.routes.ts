import { Router } from "express";
import { CreateJobController } from "../../../modules/jobs/createJob/CreateJobController";

const jobsRoutes = Router()

const createJobController = new CreateJobController()

jobsRoutes.post("/", createJobController.handle)

export { jobsRoutes } 