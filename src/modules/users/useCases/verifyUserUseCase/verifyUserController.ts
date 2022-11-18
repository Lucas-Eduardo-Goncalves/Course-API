import { VerifyUserUseCase } from "./verifyUserUseCase";

import type { Request, Response } from "express";

class VerifyUserController {
  constructor(private verifyUserUseCase: VerifyUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const res = await this.verifyUserUseCase.execute({ token });

    return response.json(res);
  }
}

export { VerifyUserController };
