-- AlterTable
ALTER TABLE "demands" ALTER COLUMN "data_emissao" DROP NOT NULL,
ALTER COLUMN "data_recebimento" DROP NOT NULL,
ALTER COLUMN "prazo_resposta" DROP NOT NULL;
