import { Teachers } from "@prisma/client";
import { db } from "../../services/db.server";

import type {
  ITeachersRepository,
  ICreateTeacherDTO,
} from "./ITeachersRepository";

export class TeachersRepository implements ITeachersRepository {
  async create({ user_id }: ICreateTeacherDTO) {
    await db.teachers.create({ data: { user_id } });
  }

  async list() {
    return await db.teachers.findMany();
  }

  async delete(id: string) {
    await db.teachers.delete({ where: { id } });
  }

  async findTeacherById(id: string): Promise<Teachers | null> {
    const res = await db.teachers.findUnique({ where: { id } });
    return res;
  }

  async findTeacherByUserId(user_id: string): Promise<Teachers | null> {
    const res = await db.teachers.findUnique({ where: { user_id } });
    return res;
  }
}
