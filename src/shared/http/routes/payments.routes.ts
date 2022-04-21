import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreatePaymentController } from "../../../modules/tesouraria/fornecedores/createPayment/createPaymentController";
import { ListAllPaymentsController } from "../../../modules/tesouraria/fornecedores/listAllPayments/listAllPaymentsController";
import { ListMonthsController } from "../../../modules/tesouraria/fornecedores/listMonths/listMonthsController";
import { ListSecretariesController } from "../../../modules/tesouraria/fornecedores/listSecretaries/listSecretariesController";

const paymentsRoutes = Router()

const createPaymentController = new CreatePaymentController()
const listAllPaymentsController = new ListAllPaymentsController()

//Categorias

const listMonthsController = new ListMonthsController()
const listSecretariesController = new ListSecretariesController()

paymentsRoutes.post("/", createPaymentController.handle)
paymentsRoutes.get("/months", listMonthsController.handle)
paymentsRoutes.get("/secretaries", listSecretariesController.handle)

paymentsRoutes.get("/", listAllPaymentsController.handle)


export { paymentsRoutes } 