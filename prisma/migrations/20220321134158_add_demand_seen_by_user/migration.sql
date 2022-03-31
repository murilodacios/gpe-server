-- CreateTable
CREATE TABLE "demandseenbyuser" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "seen_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "demandseenbyuser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "demandseenbyuser_id_key" ON "demandseenbyuser"("id");

-- AddForeignKey
ALTER TABLE "demandseenbyuser" ADD CONSTRAINT "demandseenbyuser_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "demands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "demandseenbyuser" ADD CONSTRAINT "demandseenbyuser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
