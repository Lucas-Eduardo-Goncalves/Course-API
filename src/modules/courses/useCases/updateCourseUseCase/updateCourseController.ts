import { UpdateCourseUseCase } from "./updateCourseUseCase";

import type { Request, Response } from "express";

class UpdateCourseController {
  constructor(private updateCourseUseCase: UpdateCourseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    await this.updateCourseUseCase.execute(id, data);
    return response.send();
  }
}

export { UpdateCourseController };
