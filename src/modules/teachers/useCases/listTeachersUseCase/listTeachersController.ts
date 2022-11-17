import { ListTeachersUseCase } from "./listTeachersUseCase";

import type { Request, Response } from "express";

class ListTeachersController {
  constructor(private listTeachersUseCase: ListTeachersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    return response.json(await this.listTeachersUseCase.execute());
  }
}

export { ListTeachersController };
