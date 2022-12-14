import { sign, verify } from "jsonwebtoken";
import { AppError } from "../../../../shared/error/AppError";
import { ITeachersRepository } from "../../../teachers/ITeachersRepository";
import { IUsersRepository } from "../../IUsersRepository";
import { IVerifyUsersRepository } from "../../IVerifyUsersRepository";

interface IRequest {
  token: string;
}

interface IPayload {
  sub: string;
}

class VerifyUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private verifyUsersRepository: IVerifyUsersRepository,
    private teacherRepository: ITeachersRepository
  ) {}

  async execute({ token }: IRequest) {
    const { sub: user_id } = verify(
      token,
      "fe9cee841ee513c647796fa0019e498a"
    ) as IPayload;

    const user = await this.usersRepository.findById(user_id);
    if (!user) throw new AppError("Invalid token!", 401);

    const alreadyVerifiedUser = await this.verifyUsersRepository.findByUserId(
      user_id
    );
    if (alreadyVerifiedUser) throw new AppError("Already verified user", 401);

    await this.verifyUsersRepository.create({ user_id });

    const rules = ["USER"];
    const userIsTeacher = await this.teacherRepository.findTeacherByUserId(
      user.id
    );
    if (userIsTeacher) rules.push("TEACHER");

    const userIsVerified = await this.verifyUsersRepository.findByUserId(
      user.id
    );

    if (userIsVerified) rules.push("VERIFIED");

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        rules,
      },
    };
  }
}

export { VerifyUserUseCase };
