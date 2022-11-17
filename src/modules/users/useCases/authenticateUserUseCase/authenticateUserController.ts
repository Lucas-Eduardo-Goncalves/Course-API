import type { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const token = await this.authenticateUserUseCase.execute({
      email,
      password,
    });
    return response.json(token);
  }
}

export { AuthenticateUserController };
