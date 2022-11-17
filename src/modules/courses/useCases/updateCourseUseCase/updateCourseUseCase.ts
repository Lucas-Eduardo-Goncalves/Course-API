import { AppError } from "../../../../shared/error/AppError";
import { ICourseRepository } from "../../ICoursesRepository";

interface IRequest {
  name?: string;
  description?: string;
  duration?: number;
}

class UpdateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(id: string, data: IRequest): Promise<void> {
    const courseAlreadyExists = this.courseRepository.findCourseById(id);

    if (!courseAlreadyExists) {
      throw new AppError("Course does not exist");
    }

    if (!data.name && !data.duration && !data.description) {
      throw new AppError("Nothing has been sent");
    }

    await this.courseRepository.update(id, data);
  }
}

export { UpdateCourseUseCase };
