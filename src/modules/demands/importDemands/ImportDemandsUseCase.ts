import { prisma } from "../../../db/prismaClient"

import { Readable } from 'stream'
import readLine from 'readline'

class ImportDemandsUseCase {

    async execute(file: Express.Multer.File | undefined): Promise<void> {

        const { buffer } = file

        const readableFile = new Readable()
        readableFile.push(buffer)
        readableFile.push(null)

        const lines = readLine.createInterface({
            input: readableFile
        })

        for await (let line of lines) {
            const demandLine = line.split(";")

            const dataEmissaoSplitLine = demandLine[6].split("/")
            const dataRecebimentoSplitLine = demandLine[7].split("/")
            const prazoRespostaSplitLine = demandLine[8].split("/")
            const dataRespostaSplitLine = demandLine[9].split("/")

            await prisma.demand.create({
                data: {
                    numero: demandLine[0],
                    tipo: demandLine[1],
                    orgao_origem: demandLine[2],
                    remetente: demandLine[3],
                    assunto: demandLine[4],
                    setores: demandLine[5],
                    data_emissao: new Date(`${dataEmissaoSplitLine[2] + "-" + dataEmissaoSplitLine[1] + "-" + dataEmissaoSplitLine[0]} 00:00`).toISOString(),
                    data_recebimento: new Date(`${dataRecebimentoSplitLine[2] + "-" + dataRecebimentoSplitLine[1] + "-" + dataRecebimentoSplitLine[0]} 00:00`).toISOString(),
                    prazo_resposta: new Date(`${prazoRespostaSplitLine[2] + "-" + prazoRespostaSplitLine[1] + "-" + prazoRespostaSplitLine[0]} 00:00`).toISOString(),
                    data_resposta: new Date(`${dataRespostaSplitLine[2] + "-" + dataRespostaSplitLine[1] + "-" + dataRespostaSplitLine[0]} 00:00`).toISOString(),
                    status: demandLine[10] === "Respondido" ? demandLine[10] : null,
                    processos: demandLine[11],
                    anotacao: demandLine[12],
                    userId: "a9edcc40-197b-4630-a75b-b519000486fa",
                }
            })
        }

        // new Date(`${demandDateSplitLine[2] + "-" + demandDateSplitLine[1] + "-" + demandDateSplitLine[0]} 00:00`).toISOString()

    }

}

export { ImportDemandsUseCase } 