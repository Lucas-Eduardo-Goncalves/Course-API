import { ListUnicTeacherUseCase } from "./listUnicTeacherUseCase";

import type { Request, Response } from "express";

class ListUnicTeacherController {
  constructor(private listUnicTeacherUseCase: ListUnicTeacherUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    return response.json(await this.listUnicTeacherUseCase.execute(id));
  }
}

export { ListUnicTeacherController };
