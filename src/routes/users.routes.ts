import { Router } from "express";

import { listUsersController } from "../modules/users/useCases/listUsersUseCase";
import { createUserController } from "../modules/users/useCases/createUserUseCase";

const usersRoutes = Router();

usersRoutes.get("/", async (request, response) => {
  await listUsersController.handle(request, response);
});

usersRoutes.post("/", async (request, response) => {
  await createUserController.handle(request, response);
});

export { usersRoutes };
