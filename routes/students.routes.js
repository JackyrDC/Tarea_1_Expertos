import { getAllStudents, getStudentById, getStudentsByClass, createStudent, updateStudent, deleteStudent, getStudentsByCareer } from "../controllers/students.controller";


import { Router } from "express";


const studentsRouter = Router();
studentsRouter.get("/", getAllStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.get("/class/:classId", getStudentsByClass);
studentsRouter.get("/career/:careerId", getStudentsByCareer);
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudent);
studentsRouter.delete("/:id", deleteStudent);

export default studentsRouter;