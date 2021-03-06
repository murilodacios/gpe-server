import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

interface IListAllPayments {
    month: string;
    secretary: string;
    year: string;
    takes: string;
}

class ListAllPaymentsUseCase {

    async execute({ secretary, month, year, takes }: IListAllPayments): Promise<Payment[]> {

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
                take: parseInt(takes) ? parseInt(takes) : 10
            })

            return payments

        } catch {

            throw new AppError("Não foi possível buscar os pagamentos")
        }

    }

}

export { ListAllPaymentsUseCase }