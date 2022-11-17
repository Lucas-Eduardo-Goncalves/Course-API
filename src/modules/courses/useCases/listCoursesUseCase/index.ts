import { CoursesRepository } from "../../CoursesRepository";
import { ListCoursesUseCase } from "./listCoursesUseCase";
import { ListCoursesController } from "./listCoursesController";

const coursesRepository = new CoursesRepository();
const listCoursesUseCase = new ListCoursesUseCase(coursesRepository);
const listCoursesController = new ListCoursesController(listCoursesUseCase);

export { listCoursesController };
