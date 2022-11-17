import { ListUsersUseCase } from "./listUsersUseCase";

import type { Request, Response } from "express";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    return response.json(await this.listUsersUseCase.execute());
  }
}

export { ListUsersController };
