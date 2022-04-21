import { Payment } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class CreatePaymentUseCase {

    async execute({ empresa, processo, assunto, fonte, referencia, valor, pago, month_id, secretary_id }: Omit<Payment, 'id'>): Promise<Omit<Payment, 'id'>> {

        //Verifica se secretaria existe

        const secretaryExists = await prisma.secretary.findFirst({
            where: {
                id: secretary_id
            }
        })

        if (!secretaryExists) {
            throw new AppError("Esta secretaria não existe")
        }

        //Verifica se mes existe

        const monthExists = await prisma.month.findFirst({
            where: {
                id: month_id
            }
        })

        if (!monthExists) {
            throw new AppError("Este mês não existe")
        }

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
                    month_id,
                    secretary_id
                },
                include: {
                    month: true,
                    secretary: true
                }
            })

            return payment

        } catch {
            throw new AppError("Não foi possível criar este pagamento")
        }

    }

}

export { CreatePaymentUseCase } 