import { VerifyUsersRepository } from "../../VerifyUsersRepository";
import { UsersRepository } from "../../UsersRepository";
import { VerifyUserUseCase } from "./verifyUserUseCase";
import { VerifyUserController } from "./verifyUserController";

const verifyUsersRepository = new VerifyUsersRepository();
const usersRepository = new UsersRepository();

const verifyUserUseCase = new VerifyUserUseCase(
  usersRepository,
  verifyUsersRepository
);
const verifyUserController = new VerifyUserController(verifyUserUseCase);

export { verifyUserController };
