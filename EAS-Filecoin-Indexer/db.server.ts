import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
prisma = new PrismaClient();
declare global {
  var __db__: PrismaClient;
}


export { prisma };
