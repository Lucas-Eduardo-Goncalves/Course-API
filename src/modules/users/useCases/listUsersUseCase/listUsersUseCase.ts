import { Users } from "@prisma/client";
import { IUsersRepository } from "../../IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<Users[]> {
    return await this.usersRepository.list();
  }
}

export { ListUsersUseCase };
