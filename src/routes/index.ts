import { Router } from "express";

import { coursesRoutes } from "./courses.routes";
import { teachersRoutes } from "./teachers.routes";
import { usersRoutes } from "./users.routes";
import { sessionRoutes } from "./session.routes";

const router = Router();

router.use("/session", sessionRoutes);
router.use("/users", usersRoutes);
router.use("/teachers", teachersRoutes);

router.use("/courses", coursesRoutes);

export { router };
