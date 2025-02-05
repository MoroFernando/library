-- CreateTable
CREATE TABLE "copies" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "copies_pkey" PRIMARY KEY ("id")
);
