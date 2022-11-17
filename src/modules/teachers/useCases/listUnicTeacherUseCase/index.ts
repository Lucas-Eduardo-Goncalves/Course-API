import { TeachersRepository } from "../../TeachersRepository";
import { ListUnicTeacherUseCase } from "./listUnicTeacherUseCase";
import { ListUnicTeacherController } from "./listUnicTeacherController";

const teachersRepository = new TeachersRepository();
const listUnicTeacherUseCase = new ListUnicTeacherUseCase(teachersRepository);
const listUnicTeacherController = new ListUnicTeacherController(
  listUnicTeacherUseCase
);

export { listUnicTeacherController };
