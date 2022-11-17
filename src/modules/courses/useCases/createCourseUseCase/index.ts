import { CoursesRepository } from "../../CoursesRepository";
import { TeachersRepository } from "../../../teachers/TeachersRepository";
import { CreateCourseController } from "./createCourseController";
import { CreateCourseUseCase } from "./createCourseUseCase";

const coursesRepository = new CoursesRepository();
const teachersRepository = new TeachersRepository();
const createCourseUseCase = new CreateCourseUseCase(
  coursesRepository,
  teachersRepository
);
const createCourseController = new CreateCourseController(createCourseUseCase);

export { createCourseController };
