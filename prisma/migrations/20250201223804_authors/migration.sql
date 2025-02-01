/*
  Warnings:

  - Added the required column `authorId` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "pagesNumber" INTEGER,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_books" ("category", "id", "pagesNumber", "title") SELECT "category", "id", "pagesNumber", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
