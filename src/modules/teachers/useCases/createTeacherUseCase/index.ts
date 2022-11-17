import { TeachersRepository } from "../../TeachersRepository";
import { UsersRepository } from "../../../users/UsersRepository";
import { CreateTeacherUseCase } from "./createTeacherUseCase";
import { CreateTeacherController } from "./createTeacherController";

const coursesRepository = new TeachersRepository();
const usersRepository = new UsersRepository();
const createTeacherUseCase = new CreateTeacherUseCase(
  coursesRepository,
  usersRepository
);
const createTeacherController = new CreateTeacherController(
  createTeacherUseCase
);

export { createTeacherController };
