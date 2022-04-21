-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "processo" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "fonte" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "secretaria" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "pago" TIMESTAMP(3) NOT NULL,
    "month_id" TEXT NOT NULL,
    "secretary_id" TEXT NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "secretaries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "secretaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "months" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "numeric_month" INTEGER NOT NULL,

    CONSTRAINT "months_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_id_key" ON "payments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "secretaries_id_key" ON "secretaries"("id");

-- CreateIndex
CREATE UNIQUE INDEX "months_id_key" ON "months"("id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_month_id_fkey" FOREIGN KEY ("month_id") REFERENCES "months"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_secretary_id_fkey" FOREIGN KEY ("secretary_id") REFERENCES "secretaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
