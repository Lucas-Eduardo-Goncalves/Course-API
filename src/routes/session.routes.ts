import { Router } from "express";

import { authenticateUserController } from "../modules/users/useCases/authenticateUserUseCase";

const sessionRoutes = Router();

sessionRoutes.post("/", async (request, response) => {
  await authenticateUserController.handle(request, response);
});

export { sessionRoutes };
