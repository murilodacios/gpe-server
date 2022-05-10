import { hash } from 'bcryptjs';
import { prisma } from './../src/db/prismaClient'

async function main() {

    await prisma.user.create({
        data: {
            name: "Murilo Dácio",
            email: "murilodacio@gmail.com",
            //@ts-ignore
            password: await hash("", 8),
            level: 1,
            permissions: "[all]",
        },
    });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });