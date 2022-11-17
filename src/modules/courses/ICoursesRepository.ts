import { Courses } from "@prisma/client";

export interface ICreateCourseDTO {
  name: string;
  description?: string;
  duration: number;
  teacher_id: string;
}

export interface IUpdateCourseDTO {
  name?: string;
  description?: string;
  duration?: number;
}

export interface ICourseRepository {
  list: () => Promise<Courses[]>;
  create: (data: ICreateCourseDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
  update: (id: string, data: IUpdateCourseDTO) => Promise<void>;

  findCourseByName: (name: string) => Promise<Courses | null>;
  findCourseById: (id: string) => Promise<Courses | null>;
}
