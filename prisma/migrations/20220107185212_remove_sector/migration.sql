/*
  Warnings:

  - You are about to drop the column `sector_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `sectors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_sector_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "sector_id";

-- DropTable
DROP TABLE "sectors";
