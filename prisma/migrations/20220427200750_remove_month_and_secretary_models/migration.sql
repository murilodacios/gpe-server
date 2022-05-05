/*
  Warnings:

  - You are about to drop the column `month_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `secretary_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `months` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `secretaries` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `month` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secretary` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_month_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_secretary_id_fkey";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "month_id",
DROP COLUMN "secretary_id",
ADD COLUMN     "month" TEXT NOT NULL,
ADD COLUMN     "secretary" TEXT NOT NULL;

-- DropTable
DROP TABLE "months";

-- DropTable
DROP TABLE "secretaries";
