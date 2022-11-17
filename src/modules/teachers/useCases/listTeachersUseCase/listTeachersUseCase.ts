import { Teachers } from "@prisma/client";
import { ITeachersRepository } from "../../ITeachersRepository";

class ListTeachersUseCase {
  constructor(private teachersRepository: ITeachersRepository) {}

  async execute(): Promise<Teachers[]> {
    return await this.teachersRepository.list();
  }
}

export { ListTeachersUseCase };
