import { VerifyUsers } from "@prisma/client";

export interface ICreateVerifyUserDTO {
  user_id: string;
}

export interface IVerifyUsersRepository {
  create: (user_data: ICreateVerifyUserDTO) => Promise<void>;
  list: () => Promise<VerifyUsers[]>;
  findByUserId: (user_id: string) => Promise<VerifyUsers | null>;
}
