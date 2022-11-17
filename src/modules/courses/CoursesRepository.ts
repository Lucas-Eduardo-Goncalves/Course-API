import { Courses } from "@prisma/client";
import { db } from "../../services/db.server";

import type {
  ICourseRepository,
  ICreateCourseDTO,
  IUpdateCourseDTO,
} from "./ICoursesRepository";

export class CoursesRepository implements ICourseRepository {
  async create(data: ICreateCourseDTO) {
    await db.courses.create({ data });
  }

  async list() {
    return await db.courses.findMany();
  }

  async delete(id: string) {
    await db.courses.delete({ where: { id } });
  }

  async update(id: string, data: IUpdateCourseDTO) {
    await db.courses.update({ where: { id }, data });
  }

  async findCourseById(id: string): Promise<Courses | null> {
    const res = await db.courses.findUnique({ where: { id } });
    return res;
  }

  async findCourseByName(name: string): Promise<Courses | null> {
    const res = await db.courses.findUnique({ where: { name } });
    return res;
  }
}
