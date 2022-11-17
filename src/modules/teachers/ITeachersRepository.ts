import { Teachers } from "@prisma/client";

export interface ICreateTeacherDTO {
  user_id: string;
}

export interface ITeachersRepository {
  list: () => Promise<Teachers[]>;
  create: (data: ICreateTeacherDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
  findTeacherById: (id: string) => Promise<Teachers | null>;
  findTeacherByUserId: (user_id: string) => Promise<Teachers | null>;
}
