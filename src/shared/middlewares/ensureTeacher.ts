import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/UsersRepository";
import { TeachersRepository } from "../../modules/teachers/TeachersRepository";
import { AppError } from "../error/AppError";
import type { Request, Response, NextFunction } from "express";

interface IPayload {
  sub: string;
}

export async function ensureTeacher(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing.", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "fe9cee841ee513c647796fa0019e498a"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) throw new AppError("Invalid token!", 401);

    const teachersRepository = new TeachersRepository();
    const teacher = await teachersRepository.findTeacherByUserId(user_id);
    if (!teacher) throw new AppError("User is not teacher!", 401);

    response.locals.userId = user.id;

    next();
  } catch (err) {
    throw new AppError("Invalid token!", 401);
  }
}
