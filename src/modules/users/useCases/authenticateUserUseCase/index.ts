import { UsersRepository } from "../../UsersRepository";
import { VerifyUsersRepository } from "../../VerifyUsersRepository";
import { TeachersRepository } from "../../../teachers/TeachersRepository";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import { AuthenticateUserController } from "./authenticateUserController";

const usersRepository = new UsersRepository();
const verifyUsersRepository = new VerifyUsersRepository();
const teachersRepository = new TeachersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersRepository,
  teachersRepository,
  verifyUsersRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
