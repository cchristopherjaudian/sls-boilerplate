import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const db = new PrismaClient();
class PrismaConnection {
  private static _instance: PrismaClient;

  private constructor() {}

  public static get db() {
    if (!PrismaConnection._instance) {
      PrismaConnection._instance = new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
      });
    }

    return PrismaConnection._instance;
  }
}

export default PrismaConnection;
