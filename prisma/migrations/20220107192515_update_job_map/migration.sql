/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_job_id_fkey";

-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_id_key" ON "jobs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "jobs_name_key" ON "jobs"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
