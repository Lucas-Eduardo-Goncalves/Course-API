import { CreateCourseUseCase } from "./createCourseUseCase";

import type { Request, Response } from "express";

class CreateCourseController {
  constructor(private createCourseUseCase: CreateCourseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, duration, teacher_id } = request.body;
    await this.createCourseUseCase.execute({
      name,
      description,
      duration,
      teacher_id,
    });

    return response.status(201).send();
  }
}

export { CreateCourseController };
