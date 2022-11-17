import { Router } from "express";

import { authenticateUserController } from "../modules/users/useCases/authenticateUserUseCase";
import { verifyUserController } from "../modules/users/useCases/verifyUserUseCase";

const sessionRoutes = Router();

sessionRoutes.post("/", async (request, response) => {
  await authenticateUserController.handle(request, response);
});

sessionRoutes.post("/verify", async (request, response) => {
  await verifyUserController.handle(request, response);
});

export { sessionRoutes };
