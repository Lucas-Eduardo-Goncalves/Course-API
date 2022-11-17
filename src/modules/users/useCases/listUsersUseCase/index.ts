import { UsersRepository } from "../../UsersRepository";
import { ListUsersUseCase } from "./listUsersUseCase";
import { ListUsersController } from "./listUsersController";

const usersRepository = new UsersRepository();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
