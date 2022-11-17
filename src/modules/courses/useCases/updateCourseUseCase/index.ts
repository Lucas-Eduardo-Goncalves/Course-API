import { CoursesRepository } from "../../CoursesRepository";
import { UpdateCourseUseCase } from "./updateCourseUseCase";
import { UpdateCourseController } from "./updateCourseController";

const coursesRepository = new CoursesRepository();
const updateCourseUseCase = new UpdateCourseUseCase(coursesRepository);
const updateCourseController = new UpdateCourseController(updateCourseUseCase);

export { updateCourseController };
