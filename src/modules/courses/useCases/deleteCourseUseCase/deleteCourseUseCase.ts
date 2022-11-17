import { AppError } from "../../../../shared/error/AppError";
import { ICourseRepository } from "../../ICoursesRepository";

class DeleteCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<void> {
    const courseAlreadyExists = this.courseRepository.findCourseById(id);

    if (!courseAlreadyExists) {
      throw new AppError("Course does not exist");
    }

    return await this.courseRepository.delete(id);
  }
}

export { DeleteCourseUseCase };
