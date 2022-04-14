import { Task } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class CheckTaskAsDoneUseCase {

    async execute(id: string): Promise<Task> {

        const taskExists = await prisma.task.findFirst({
            where: {
                id
            }
        })

        if(!taskExists) {
            throw new AppError("Task does not exist")
        }

        try {

            const taskChecked = await prisma.task.update({
                data: {
                    completed: !taskExists.completed
                },
                where: {
                  id  
                }
            })

            return taskChecked


        } catch {
            throw new AppError("Task not checked")
        }

    }

}

export { CheckTaskAsDoneUseCase }