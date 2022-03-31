import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AddAnotationToDemandController } from "../../../modules/demands/addAnotationToDemand/AddAnotationToDemandController";
import { AddUseToDemandController } from "../../../modules/demands/addUserToDemand/AddUserToDemandController";
import { CheckResponseToDemandController } from "../../../modules/demands/CheckResponseToDemand/CheckResponseToDemandController";
import { CreateDemandController } from "../../../modules/demands/createDemand/CreateDemandController";
import { DemandSeenByUserController } from "../../../modules/demands/demandSeenByUser/DemandSeenByUserController";
import { ListDemandController } from "../../../modules/demands/listDemand/ListDemandController";
import { ListOneDemandController } from "../../../modules/demands/listOneDemand/ListOneDemandController";

const demandsRoutes = Router()

const createDemandController = new CreateDemandController()
const listDemandController = new ListDemandController()
const addUseToDemandController = new AddUseToDemandController()
const listOneDemandController = new ListOneDemandController()
const checkResponseToDemandController = new CheckResponseToDemandController()
const addAnotationToDemandController = new AddAnotationToDemandController()
const demandSeenByUserController = new DemandSeenByUserController()

demandsRoutes.post("/", ensureAuthenticated , createDemandController.handle)
demandsRoutes.get("/", ensureAuthenticated, listDemandController.handle)
demandsRoutes.post('/add-user/:demandId', ensureAuthenticated, addUseToDemandController.handle)
demandsRoutes.get('/:id', ensureAuthenticated, listOneDemandController.handle)

demandsRoutes.put('/check-response/:id', ensureAuthenticated, checkResponseToDemandController.handle)
demandsRoutes.put('/add-anotation/:id', ensureAuthenticated, addAnotationToDemandController.handle)

demandsRoutes.put('/seen/:demandId', ensureAuthenticated, demandSeenByUserController.handle)

export { demandsRoutes } 