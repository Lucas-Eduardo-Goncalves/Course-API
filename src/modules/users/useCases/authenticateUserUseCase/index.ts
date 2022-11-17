import { UsersRepository } from "../../UsersRepository";
import { TeachersRepository } from "../../../teachers/TeachersRepository";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import { AuthenticateUserController } from "./authenticateUserController";

const usersRepository = new UsersRepository();
const teachersRepository = new TeachersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersRepository,
  teachersRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
