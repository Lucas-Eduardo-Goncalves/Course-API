import { Users } from "@prisma/client";

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUsersRepository {
  create: (userData: ICreateUserDTO) => Promise<Users>;
  list: () => Promise<Users[]>;
  update: (id: string, userData: IUpdateUserDTO) => Promise<void>;
  findById: (userId: string) => Promise<Users | null>;
  findByEmail: (userEmail: string) => Promise<Users | null>;
}
