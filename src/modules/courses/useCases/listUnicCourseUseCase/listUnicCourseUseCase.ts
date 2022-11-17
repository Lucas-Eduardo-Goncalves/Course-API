import { Courses } from "@prisma/client";
import { AppError } from "../../../../shared/error/AppError";
import { ICourseRepository } from "../../ICoursesRepository";

class ListUnicCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<Courses> {
    const course = await this.courseRepository.findCourseById(id);
    if (!course) throw new AppError("Course does not exist");

    return course;
  }
}

export { ListUnicCourseUseCase };
