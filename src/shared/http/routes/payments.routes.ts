import { Router } from "express";
import multer from "multer";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreatePaymentController } from "../../../modules/tesouraria/fornecedores/createPayment/createPaymentController";
import { ImportPaymentsController } from "../../../modules/tesouraria/fornecedores/importPayments/importPaymentsController";
import { ListAllPaymentsController } from "../../../modules/tesouraria/fornecedores/listAllPayments/listAllPaymentsController";
import { ReportAllPaymentsController } from "../../../modules/tesouraria/fornecedores/reportAllPayments/reportAllPaymentsController";

const paymentsRoutes = Router()

const createPaymentController = new CreatePaymentController()
const listAllPaymentsController = new ListAllPaymentsController()

const importPaymentsController = new ImportPaymentsController()

const reportAllPaymentsController = new ReportAllPaymentsController()

const multerConfig = multer()

paymentsRoutes.post("/", ensureAuthenticated, createPaymentController.handle)
paymentsRoutes.get("/", ensureAuthenticated, listAllPaymentsController.handle)

//Import

paymentsRoutes.post("/import", ensureAuthenticated, multerConfig.single("file"), importPaymentsController.handle)

//Report All Payments

paymentsRoutes.get("/report", ensureAuthenticated, reportAllPaymentsController.handle)

export { paymentsRoutes } 