const express = require('express');
const StudentController = require('../controllers/students');

const router = express.Router();

router.get("/student",StudentController.getAllStudents);
router.get("/student/:id",StudentController.getStudents);
router.post("/student",StudentController.createStudents);
router.put("/student/:id",StudentController.updateStudents);
router.delete("/student/:id",StudentController.deleteStudents);

export default router;