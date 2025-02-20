const dotenv=require('dotenv').config();
// using dotenv for port variables
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
// using cors as a middleware to 
app.get('/',(req,res)=>{
    res.send("hello word");
})
module.exports=app;