import { AppError } from "../../../../shared/error/AppError";
import { IUsersRepository } from "../../../users/IUsersRepository";
import { ITeachersRepository } from "../../ITeachersRepository";

interface IRequest {
  user_id: string;
}

class CreateTeacherUseCase {
  constructor(
    private teacherRepository: ITeachersRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findById(user_id);
    if (!userExists) throw new AppError("User is not exists");

    const courseAlreadyExists = await this.teacherRepository.findTeacherById(
      user_id
    );
    if (courseAlreadyExists) throw new AppError("Teacher already exists");

    await this.teacherRepository.create({ user_id });
  }
}

export { CreateTeacherUseCase };
