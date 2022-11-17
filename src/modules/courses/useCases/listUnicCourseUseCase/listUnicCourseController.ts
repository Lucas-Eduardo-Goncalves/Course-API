import { ListUnicCourseUseCase } from "./listUnicCourseUseCase";

import type { Request, Response } from "express";

class ListUnicCourseController {
  constructor(private listUnicCourseUseCase: ListUnicCourseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    return response.json(await this.listUnicCourseUseCase.execute(id));
  }
}

export { ListUnicCourseController };
