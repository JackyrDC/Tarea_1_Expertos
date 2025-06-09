import { getAllClasses, getClassById, deleteClass, updateClass, createClass } from "../controllers/class.controller";

import { Router } from "express";

const classRouter = Router();
classRouter.get("/", getAllClasses);
classRouter.get("/:id", getClassById);
classRouter.post("/", createClass);
classRouter.put("/:id", updateClass);
classRouter.delete("/:id", deleteClass);

export default classRouter;