import { ListCoursesUseCase } from "./listCoursesUseCase";

import type { Request, Response } from "express";

class ListCoursesController {
  constructor(private listCoursesUseCase: ListCoursesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    return response.json(await this.listCoursesUseCase.execute());
  }
}

export { ListCoursesController };
