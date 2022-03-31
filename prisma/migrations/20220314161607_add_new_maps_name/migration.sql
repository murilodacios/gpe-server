/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnDemand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnDemand" DROP CONSTRAINT "UserOnDemand_demandId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnDemand" DROP CONSTRAINT "UserOnDemand_userId_fkey";

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "UserOnDemand";

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersondemand" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "usersondemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_key" ON "tasks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usersondemand_id_key" ON "usersondemand"("id");

-- AddForeignKey
ALTER TABLE "usersondemand" ADD CONSTRAINT "usersondemand_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "demands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersondemand" ADD CONSTRAINT "usersondemand_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
