import { UsersRepository } from "../../UsersRepository";
import { VerifyUsersRepository } from "../../VerifyUsersRepository";
import { TeachersRepository } from "../../../teachers/TeachersRepository";

import { VerifyUserUseCase } from "./verifyUserUseCase";
import { VerifyUserController } from "./verifyUserController";

const usersRepository = new UsersRepository();
const verifyUsersRepository = new VerifyUsersRepository();
const teachersRepository = new TeachersRepository();

const verifyUserUseCase = new VerifyUserUseCase(
  usersRepository,
  verifyUsersRepository,
  teachersRepository
);

const verifyUserController = new VerifyUserController(verifyUserUseCase);
export { verifyUserController };
