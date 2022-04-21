/*
  Warnings:

  - You are about to alter the column `valor` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(19,3)`.

*/
-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(19,3);
