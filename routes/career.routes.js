import { getAllCareers, getCareerById, createCareer, updateCareer, deleteCareer } from "../controllers/career.controller";

import { Router } from "express";

const careerRouter = Router();
careerRouter.get("/", getAllCareers);
careerRouter.get("/:id", getCareerById);
careerRouter.post("/", createCareer);
careerRouter.put("/:id", updateCareer);
careerRouter.delete("/:id", deleteCareer);

export default careerRouter;