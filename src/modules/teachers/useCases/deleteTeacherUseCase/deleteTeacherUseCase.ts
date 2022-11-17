import { AppError } from "../../../../shared/error/AppError";
import { ITeachersRepository } from "../../ITeachersRepository";

class DeleteTeacherUseCase {
  constructor(private teachersRepository: ITeachersRepository) {}

  async execute(id: string): Promise<void> {
    const teacherAlreadyExists = this.teachersRepository.findTeacherById(id);

    if (!teacherAlreadyExists) {
      throw new AppError("Teacher does not exist");
    }

    return await this.teachersRepository.delete(id);
  }
}

export { DeleteTeacherUseCase };
