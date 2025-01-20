import express from "express";
import { StudentModel } from "../model/Student";



   const getAllStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const students = await StudentModel.find({});
            console.log('students>>>>',students);
            
            return response.status(200).json({data:students})
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }

   const getStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const students = await StudentModel.findById(id);
            return response.status(200).json({data:students})
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }

   const createStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const {name,age,email,gender,address,status} = request.body
            const student = new StudentModel({
                name,
                age,
                email,
                gender,
                address,
                status

            })
            await student.save();
            return response.status(201).json({message:"Student Created",data:student})
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }

    const updateStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const {name,age,email,gender,address,status} = request.body
            const student = await StudentModel.findById(id);
            if(student){
                student.name=name,
                student.age=age,
                student.email=email,
                student.gender=gender,
                student.address=address,
                student.status=status,

                await student.save();
            return response.status(200).json({message:"Student Updated",data:student})
            }
            
            return response.sendStatus(200)
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }


   const deleteStudents = async (request:express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            await StudentModel.findByIdAndDelete({_id: id});
            return response.status(200).json({message:"Student Deleted"})
        } catch (error) {
            console.error(error);
            return response.sendStatus(500)
        }
    }



    module.exports = {getAllStudents,getStudents,createStudents,updateStudents,deleteStudents};