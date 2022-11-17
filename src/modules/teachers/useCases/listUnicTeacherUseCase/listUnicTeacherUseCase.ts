import { Teachers } from "@prisma/client";
import { AppError } from "../../../../shared/error/AppError";
import { ITeachersRepository } from "../../ITeachersRepository";

class ListUnicTeacherUseCase {
  constructor(private courseRepository: ITeachersRepository) {}

  async execute(id: string): Promise<Teachers> {
    const teachers = await this.courseRepository.findTeacherById(id);
    if (!teachers) throw new AppError("Teacher does not exist");

    return teachers;
  }
}

export { ListUnicTeacherUseCase };
