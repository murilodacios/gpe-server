/*
  Warnings:

  - The `data_resposta` column on the `demands` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `data_emissao` on the `demands` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `data_recebimento` on the `demands` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `prazo_resposta` on the `demands` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "demands" DROP COLUMN "data_emissao",
ADD COLUMN     "data_emissao" TIMESTAMP(3) NOT NULL,
DROP COLUMN "data_recebimento",
ADD COLUMN     "data_recebimento" TIMESTAMP(3) NOT NULL,
DROP COLUMN "prazo_resposta",
ADD COLUMN     "prazo_resposta" TIMESTAMP(3) NOT NULL,
DROP COLUMN "data_resposta",
ADD COLUMN     "data_resposta" TIMESTAMP(3);
