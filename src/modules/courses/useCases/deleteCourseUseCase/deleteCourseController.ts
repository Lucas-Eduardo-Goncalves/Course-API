import { DeleteCourseUseCase } from "./deleteCourseUseCase";

import type { Request, Response } from "express";

class DeleteCourseController {
  constructor(private deleteCourseUseCase: DeleteCourseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteCourseUseCase.execute(id);

    return response.send();
  }
}

export { DeleteCourseController };
