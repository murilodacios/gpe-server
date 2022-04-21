/*
  Warnings:

  - You are about to alter the column `valor` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `Decimal(19,3)` to `Decimal(19,2)`.

*/
-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(19,2);
