import { Payment } from "@prisma/client";
import { Readable } from 'stream'
import readLine from 'readline'
import { prisma } from "../../../../db/prismaClient";

class ImportPaymentsUseCase {

    async execute(file: Express.Multer.File | undefined): Promise<void> {

        //@ts-ignore
        const { buffer } = file

        const readableFile = new Readable()
        readableFile.push(buffer)
        readableFile.push(null)

        const lines = readLine.createInterface({
            input: readableFile
        })

        for await (let line of lines) {
            const paymentLine = line.split(";")

            const paymentDateSplitLine = paymentLine[6].split("/")

            await prisma.payment.create({
                data: {
                    empresa: paymentLine[0],
                    processo: paymentLine[1],
                    assunto: paymentLine[2],
                    fonte: paymentLine[3],
                    referencia: paymentLine[4],
                    valor: Number(paymentLine[5]),
                    pago: new Date(`${paymentDateSplitLine[2] + "-" + paymentDateSplitLine[1] + "-" + paymentDateSplitLine[0]} 00:00`).toISOString(),
                    month: paymentLine[7],
                    secretary: paymentLine[8],
                    year: new Date().getFullYear().toString()
                }
            })
        }



    }

}

export { ImportPaymentsUseCase } 