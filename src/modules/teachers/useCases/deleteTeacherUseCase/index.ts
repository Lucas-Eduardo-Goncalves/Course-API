import { TeachersRepository } from "../../TeachersRepository";
import { DeleteTeacherUseCase } from "./deleteTeacherUseCase";
import { DeleteTeacherController } from "./deleteTeacherController";

const teachersRepository = new TeachersRepository();
const deleteTeacherUseCase = new DeleteTeacherUseCase(teachersRepository);
const deleteTeacherController = new DeleteTeacherController(
  deleteTeacherUseCase
);

export { deleteTeacherController };
