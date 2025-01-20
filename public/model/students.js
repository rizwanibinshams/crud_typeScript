"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongooss = require('mongoose');
const students = new mongooss.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: Boolean,
        require: true,
        default: "active"
    }
}, {
    timestamps: true,
});
exports.studentModel = mongooss.model('students', students);
