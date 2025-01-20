import router from "./router";

const express = require("express")
const mongoose = require("mongoose")
const port = 3030;
const app = express();
app.use(express.json());


const MONGODB_URL="mongodb+srv://Ajmal:uHFZRkakQ2YjlqfA@cluster0.fbwkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connect = mongoose.connect(MONGODB_URL)

connect.then(()=>{
    console.log("User Database connected Successfully");
})
.catch(()=>{
    console.log(" Database cannot be connected");
})



app.use("/",router)

app.listen(port,()=>{
    console.log(`application running this port http://localhost:${port}`);
    
})