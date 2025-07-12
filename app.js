import express from 'express';
// creating an instance 
const app=express();

app.get("/",(req,res)=>res.send(" hello home page ") );
app.get("/about",(req,res)=>res.send(" hello about page  ") );
app.get("/contact",(req,res)=>res.send(" hello contact page ") );
app.get("/last",(req,res)=>res.send(" hello last page ") );

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running at PORT : ${PORT}`);

});