import { AppError } from "../../../../shared/error/AppError";
import { ITeachersRepository } from "../../../teachers/ITeachersRepository";
import { ICourseRepository } from "../../ICoursesRepository";

interface IRequest {
  name: string;
  description?: string;
  duration: number;
  teacher_id: string;
}

class CreateCourseUseCase {
  constructor(
    private courseRepository: ICourseRepository,
    private teachersRepository: ITeachersRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    const courseAlreadyExists = await this.courseRepository.findCourseByName(
      data.name
    );

    if (courseAlreadyExists) {
      throw new AppError("Course already exists", 400);
    }

    const teacherAlreadyExists = await this.teachersRepository.findTeacherById(
      data.teacher_id
    );

    if (!teacherAlreadyExists) {
      throw new AppError("Teacher is not exists");
    }

    await this.courseRepository.create(data);
  }
}

export { CreateCourseUseCase };
