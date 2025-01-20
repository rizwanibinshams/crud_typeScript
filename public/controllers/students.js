"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../model/Student");
const getAllStudents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield Student_1.StudentModel.find({});
        console.log('students>>>>', students);
        return response.status(200).json({ data: students });
    }
    catch (error) {
        console.error(error);
        return response.sendStatus(500);
    }
});
const getStudents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const students = yield Student_1.StudentModel.findById(id);
        return response.status(200).json({ data: students });
    }
    catch (error) {
        console.error(error);
        return response.sendStatus(500);
    }
});
const createStudents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, email, gender, address, status } = request.body;
        const student = new Student_1.StudentModel({
            name,
            age,
            email,
            gender,
            address,
            status
        });
        yield student.save();
        return response.status(201).json({ message: "Student Created", data: student });
    }
    catch (error) {
        console.error(error);
        return response.sendStatus(500);
    }
});
const updateStudents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const { name, age, email, gender, address, status } = request.body;
        const student = yield Student_1.StudentModel.findById(id);
        if (student) {
            student.name = name,
                student.age = age,
                student.email = email,
                student.gender = gender,
                student.address = address,
                student.status = status,
                yield student.save();
            return response.status(200).json({ message: "Student Updated", data: student });
        }
        return response.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        return response.sendStatus(500);
    }
});
const deleteStudents = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        yield Student_1.StudentModel.findByIdAndDelete({ _id: id });
        return response.status(200).json({ message: "Student Deleted" });
    }
    catch (error) {
        console.error(error);
        return response.sendStatus(500);
    }
});
module.exports = { getAllStudents, getStudents, createStudents, updateStudents, deleteStudents };
