import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class ListAllPaymentsUseCase {

    async execute({ secretary, month, year, takes }: Pick<Payment, 'month' | 'secretary' | 'year'>): Promise<Payment[]> {

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
                take: parseInt(takes)
            })

            return payments

        } catch {

            throw new AppError("Não foi possível buscar os pagamentos")
        }

    }

}

export { ListAllPaymentsUseCase }