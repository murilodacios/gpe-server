import { prisma } from "../../../db/prismaClient"
import { AppError } from "../../../shared/errors/AppError"

class RemoveTaskUseCase {

    async execute(id: string): Promise<void> {

        const taskExists = await prisma.task.findFirst({
            where: {
                id
            }
        })

        if(!taskExists) {
            throw new AppError("Esta tarefa não existe!")
        }

        try {

            await prisma.task.delete({
                where: {
                    id
                }
            })

        } catch {
            throw new AppError("Não foi possível deletar essa tarefa")
        }

    }

}

export { RemoveTaskUseCase }