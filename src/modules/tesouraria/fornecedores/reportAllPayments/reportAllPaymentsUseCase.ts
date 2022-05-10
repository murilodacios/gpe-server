import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

interface IReportAllPayments {
    month: string;
    secretary: string;
    year: string;
}

class ReportAllPaymentsUseCase {

    async execute({ secretary, month, year }: IReportAllPayments): Promise<Payment[]> {

        try {

            const payments = await prisma.payment.findMany({
                where: {
                    month,
                    secretary,
                    year
                },
                orderBy: {
                    pago: "desc"
                },
            })

            return payments

        } catch {

            throw new AppError("Não foi possível buscar os pagamentos")
        }

    }

}

export { ReportAllPaymentsUseCase }