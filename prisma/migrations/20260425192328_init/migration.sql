-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "quantityTotal" INTEGER NOT NULL,
    "quantityBooked" INTEGER NOT NULL,
    "pricePerDay" REAL NOT NULL
);
