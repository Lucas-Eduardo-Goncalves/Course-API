import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";

import type { ICreateUserDTO, IUsersRepository } from "../../IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ password, email, name }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
