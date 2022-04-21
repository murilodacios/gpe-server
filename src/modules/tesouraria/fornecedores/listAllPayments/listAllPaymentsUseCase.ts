import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class ListAllPaymentsUseCase {

    async execute({ secretary_id, month_id }: Pick<Payment, 'month_id' | 'secretary_id'>): Promise<Payment[]> {

        try {

            const payments = await prisma.payment.findMany({
                where: {
                    month_id,
                    secretary_id,
                },
                include: {
                    month: true,
                    secretary: true
                },
                orderBy: {
                    pago: "desc"
                }
            })

            return payments

        } catch {

            throw new AppError("Não foi possível buscar os pagamentos")
        }

    }

}

export { ListAllPaymentsUseCase }