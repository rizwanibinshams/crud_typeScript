import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
    name: string;
    age: number;
    email: string;
    gender: string;
    address: string;
    status: string;
  }


const StudentSchema:Schema = new Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    status:{
        type:String,
        require:true,
        default:"active"
    }
    
},
{
    timestamps:true,
}

);

export const StudentModel = mongoose.model<IStudent>('Student',StudentSchema)

