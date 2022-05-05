import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class CreatePaymentUseCase {

    async execute({ empresa, processo, assunto, fonte, referencia, valor, pago, month, secretary }: Omit<Payment, 'id' | 'year'>): Promise<Omit<Payment, 'id'>> {

        try {
            const payment = await prisma.payment.create({
                data: {
                    empresa,
                    processo,
                    assunto,
                    fonte,
                    referencia,
                    valor,
                    pago: new Date(`${pago} 00:00`).toISOString(),
                    month,
                    secretary,
                    year: new Date().getFullYear().toString()
                }
            })

            return payment

        } catch {
            throw new AppError("Não foi possível criar este pagamento")
        }

    }

}

export { CreatePaymentUseCase } 