-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demands" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "orgao_origem" TEXT NOT NULL,
    "remetente" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "setores" TEXT NOT NULL,
    "data_emissao" TIMESTAMP(3) NOT NULL,
    "data_recebimento" TIMESTAMP(3) NOT NULL,
    "prazo_resposta" TIMESTAMP(3) NOT NULL,
    "status" TEXT,
    "data_resposta" TIMESTAMP(3),
    "obs_resposta" TEXT,
    "anotacao" TEXT,
    "processos" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "demands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnDemand" (
    "id" TEXT NOT NULL,
    "demandId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserOnDemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");

-- CreateIndex
CREATE UNIQUE INDEX "demands_id_key" ON "demands"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserOnDemand_id_key" ON "UserOnDemand"("id");

-- AddForeignKey
ALTER TABLE "demands" ADD CONSTRAINT "demands_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDemand" ADD CONSTRAINT "UserOnDemand_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "demands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDemand" ADD CONSTRAINT "UserOnDemand_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
