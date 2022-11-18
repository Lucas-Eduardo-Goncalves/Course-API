import { Router } from "express";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticate";

import { listTeachersController } from "../modules/teachers/useCases/listTeachersUseCase";
import { listUnicTeacherController } from "../modules/teachers/useCases/listUnicTeacherUseCase";
import { createTeacherController } from "../modules/teachers/useCases/createTeacherUseCase";
import { deleteTeacherController } from "../modules/teachers/useCases/deleteTeacherUseCase";

const teachersRoutes = Router();
teachersRoutes.use(ensureAuthenticated);

teachersRoutes.get("/", (request, response) => {
  return listTeachersController.handle(request, response);
});

teachersRoutes.get("/:id", (request, response) => {
  return listUnicTeacherController.handle(request, response);
});

teachersRoutes.delete("/:id", (request, response) => {
  return deleteTeacherController.handle(request, response);
});

teachersRoutes.post("/", (request, response) => {
  return createTeacherController.handle(request, response);
});

export { teachersRoutes };
