import { VerifyUsers } from "@prisma/client";
import { db } from "../../services/db.server";

import type {
  IVerifyUsersRepository,
  ICreateVerifyUserDTO,
} from "./IVerifyUsersRepository";

class VerifyUsersRepository implements IVerifyUsersRepository {
  async create(data: ICreateVerifyUserDTO): Promise<void> {
    await db.verifyUsers.create({ data });
  }

  async list(): Promise<VerifyUsers[]> {
    return await db.verifyUsers.findMany();
  }

  async findByUserId(user_id: string): Promise<VerifyUsers | null> {
    return await db.verifyUsers.findUnique({ where: { user_id } });
  }
}

export { VerifyUsersRepository };
