import { UsersRepository } from "../../UsersRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
