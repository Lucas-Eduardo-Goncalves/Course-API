import { CreateTeacherUseCase } from "./createTeacherUseCase";

import type { Request, Response } from "express";

class CreateTeacherController {
  constructor(private createTeacherUseCase: CreateTeacherUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;
    await this.createTeacherUseCase.execute({ user_id });

    return response.status(201).send();
  }
}

export { CreateTeacherController };
