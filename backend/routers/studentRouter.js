import express from "express";
import { createStudent, getStudent } from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/", createStudent);

studentRouter.get("/", getStudent);

export default studentRouter;
