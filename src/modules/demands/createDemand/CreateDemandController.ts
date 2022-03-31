import { Request, Response } from "express";
import { CreateDemandUseCase } from "./createDemandUseCase";

class CreateDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const {
            numero,
            tipo,
            orgao_origem,
            remetente,
            assunto,
            setores,
            data_emissao,
            data_recebimento,
            prazo_resposta,
            processos,
            userId
        } = req.body

        const createDemandUseCase = new CreateDemandUseCase()

        const demand = await createDemandUseCase.execute({
            numero,
            tipo,
            orgao_origem,
            remetente,
            assunto,
            setores,
            data_emissao,
            data_recebimento,
            prazo_resposta,
            processos,
            userId
        })

        return res.json(demand)


    }

}

export { CreateDemandController }