import { verify } from "jsonwebtoken";
import { AppError } from "../../../../shared/error/AppError";
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
    private verifyUsersRepository: IVerifyUsersRepository
  ) {}

  async execute({ token }: IRequest): Promise<void> {
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
  }
}

export { VerifyUserUseCase };
