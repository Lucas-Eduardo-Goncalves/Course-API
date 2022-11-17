import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/error/AppError";
import { ITeachersRepository } from "../../../teachers/ITeachersRepository";

import type { IUsersRepository } from "../../IUsersRepository";

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
    private teacherRepository: ITeachersRepository
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

    const rules = ["user"];
    const userIsTeacher = await this.teacherRepository.findTeacherByUserId(
      user.id
    );
    if (userIsTeacher) {
      rules.push("teacher");
    }

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
