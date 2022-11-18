import { TeachersRepository } from "../../modules/teachers/TeachersRepository";
import { AppError } from "../error/AppError";
import type { Request, Response, NextFunction } from "express";

export async function ensureTeacher(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const user_id = response.locals.user_id;

  try {
    const teachersRepository = new TeachersRepository();
    const teacher = await teachersRepository.findTeacherByUserId(user_id);
    if (!teacher) throw new AppError("User is not teacher!", 401);

    response.locals.teacher_id = teacher.id;

    next();
  } catch (err) {
    throw new AppError("Invalid token!", 401);
  }
}
