/*
  Warnings:

  - You are about to drop the column `firsrName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "firsrName",
ADD COLUMN     "firstName" TEXT;
