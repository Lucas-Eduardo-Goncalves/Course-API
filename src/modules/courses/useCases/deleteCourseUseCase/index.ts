import { CoursesRepository } from "../../CoursesRepository";
import { DeleteCourseUseCase } from "./deleteCourseUseCase";
import { DeleteCourseController } from "./deleteCourseController";

const coursesRepository = new CoursesRepository();
const deleteCourseUseCase = new DeleteCourseUseCase(coursesRepository);
const deleteCourseController = new DeleteCourseController(deleteCourseUseCase);

export { deleteCourseController };
