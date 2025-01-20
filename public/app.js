"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router"));
const express = require("express");
const mongoose = require("mongoose");
const port = 3030;
const app = express();
app.use(express.json());
const MONGODB_URL = "mongodb://127.0.0.1:27017/todo_typescript?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8";
const connect = mongoose.connect(MONGODB_URL);
connect.then(() => {
    console.log("User Database connected Successfully");
})
    .catch(() => {
    console.log(" Database cannot be connected");
});
app.use("/", router_1.default);
app.listen(port, () => {
    console.log(`application running this port http://localhost:${port}`);
});
