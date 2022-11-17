import { CoursesRepository } from "../../CoursesRepository";
import { ListUnicCourseUseCase } from "./listUnicCourseUseCase";
import { ListUnicCourseController } from "./listUnicCourseController";

const coursesRepository = new CoursesRepository();
const listUnicCourseUseCase = new ListUnicCourseUseCase(coursesRepository);
const listUnicCourseController = new ListUnicCourseController(
  listUnicCourseUseCase
);

export { listUnicCourseController };
