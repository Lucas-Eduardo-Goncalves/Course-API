import { Courses } from "@prisma/client";
import { ICourseRepository } from "../../ICoursesRepository";

class ListCoursesUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(): Promise<Courses[]> {
    return await this.courseRepository.list();
  }
}

export { ListCoursesUseCase };
