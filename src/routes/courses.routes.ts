import { Router } from "express";
import { ensureTeacher } from "../shared/middlewares/ensureTeacher";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticate";

import { listCoursesController } from "../modules/courses/useCases/listCoursesUseCase";
import { listUnicCourseController } from "../modules/courses/useCases/listUnicCourseUseCase";

import { createCourseController } from "../modules/courses/useCases/createCourseUseCase";
import { deleteCourseController } from "../modules/courses/useCases/deleteCourseUseCase";
import { updateCourseController } from "../modules/courses/useCases/updateCourseUseCase";

const coursesRoutes = Router();
coursesRoutes.use(ensureAuthenticated);

coursesRoutes.get("/", (request, response) => {
  return listCoursesController.handle(request, response);
});

coursesRoutes.get("/:id", (request, response) => {
  return listUnicCourseController.handle(request, response);
});

coursesRoutes.post("/", ensureTeacher, (request, response) => {
  return createCourseController.handle(request, response);
});

coursesRoutes.delete("/:id", ensureTeacher, (request, response) => {
  return deleteCourseController.handle(request, response);
});

coursesRoutes.put("/:id", ensureTeacher, (request, response) => {
  return updateCourseController.handle(request, response);
});

export { coursesRoutes };
