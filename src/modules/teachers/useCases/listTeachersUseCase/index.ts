import { TeachersRepository } from "../../TeachersRepository";
import { ListTeachersUseCase } from "./listTeachersUseCase";
import { ListTeachersController } from "./listTeachersController";

const teachersRepository = new TeachersRepository();
const listTeachersUseCase = new ListTeachersUseCase(teachersRepository);
const listTeachersController = new ListTeachersController(listTeachersUseCase);

export { listTeachersController };
