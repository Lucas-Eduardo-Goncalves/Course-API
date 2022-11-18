import { CreateCourseUseCase } from "./createCourseUseCase";

import type { Request, Response } from "express";

class CreateCourseController {
  constructor(private createCourseUseCase: CreateCourseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, duration } = request.body;
    const teacher_id = response.locals.teacher_id;

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
