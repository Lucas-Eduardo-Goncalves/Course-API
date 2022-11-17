import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/error/AppError";

import type { IUsersRepository } from "../../IUsersRepository";
import type { IVerifyUsersRepository } from "../../IVerifyUsersRepository";
import type { ITeachersRepository } from "../../../teachers/ITeachersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    rules: string[];
  };
}

class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private teacherRepository: ITeachersRepository,
    private verifyUsersRepository: IVerifyUsersRepository
  ) {}

  async execute(props: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(props.email);
    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(props.password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "fe9cee841ee513c647796fa0019e498a", {
      subject: user.id,
      expiresIn: "1d",
    });

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

export { AuthenticateUserUseCase };
