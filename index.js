
const express=require("express");

const http=require("http");

const Url=require("url");

const port=8000;

const Users=require("./users.js")

const app=express();


app.get("/",(req,res)=>{
    res.send('hell000')
    res.render("index",{text:"World"});
});

app.use("/users",Users) 


app.listen(port,()=>{
    `Server is running at localhost:${port}`
}
)
