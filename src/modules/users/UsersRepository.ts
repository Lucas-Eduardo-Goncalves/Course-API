import { Users } from "@prisma/client";
import { db } from "../../services/db.server";

import type {
  IUsersRepository,
  ICreateUserDTO,
  IUpdateUserDTO,
} from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<Users> {
    return await db.users.create({ data });
  }

  async list(): Promise<Users[]> {
    return await db.users.findMany();
  }

  async update(id: string, data: IUpdateUserDTO): Promise<void> {
    await db.users.update({ where: { id }, data });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await db.users.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<Users | null> {
    return await db.users.findUnique({ where: { id } });
  }
}

export { UsersRepository };
