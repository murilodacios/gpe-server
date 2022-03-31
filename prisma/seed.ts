import { prisma } from './../src/db/prismaClient'
import { admin } from './seeds/admin'

async function main() {

    await prisma.user.create({
        data: admin,
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