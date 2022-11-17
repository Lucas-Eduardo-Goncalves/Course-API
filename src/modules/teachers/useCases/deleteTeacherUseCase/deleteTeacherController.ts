import { DeleteTeacherUseCase } from "./deleteTeacherUseCase";

import type { Request, Response } from "express";

class DeleteTeacherController {
  constructor(private deleteTeacherUseCase: DeleteTeacherUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteTeacherUseCase.execute(id);

    return response.send();
  }
}

export { DeleteTeacherController };
