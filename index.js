// const http=require("http");

// const port=8000;

// const index=http.createServer((request,response)=>{
//     response.statusCode=200;
//     response.setHeader("Content-Type","text/plain");
//     response.end("Hello World\n");
// });

// index.listen(port,()=>{
//     console.log(`Server running in at http://localhost:${port}`)
// })

const express = require('express')
const app = express()
const path=require("path")
const port = 3000


app.get("/",(req,res)=>{
    // console.log("hi terminal");
    // res.send("hi refreshedddddd yay");
    // res.render("index");

    res.sendFile(path.join(__dirname,"public","index.html"))
})

// app.use(express.static(path.join(__dirname,"public")));

const userRouter=require("./users");

app.use("/users",userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
