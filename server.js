//own server environment node 
//middleware : express 
//npm init -y =>generate package.json
// we need expres so we have to install 
// npm install --save express
//above command generates package-loc.json
//this files has list of dependecies required by your project
// npm install -g nodemon
//the above code monistors the change in server file for below command
//nodemon server.js => used for execution
//string written inside `` is dynamic expression ${port}
const express=require('express');
const server=express();
const port=3000;
server.use(express.json())
server.use(express.urlencoded({extended:true}));
//server must show the default page for your website : index.html
server.get('/',(req,res)=>{
  res.sendFile(__dirname+"/index.html");  
});
server.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname+"/css/style.css");  
  });
  server.get('/js/main.js',(req,res)=>{
    res.sendFile(__dirname+"/js/main.js");  
  });
  server.post('/welcome',(req,res)=>{
    const firstName=req.body.firstName;
    console.log("firstName: "+firstName);  
    // res.sendFile(__dirname+"/welcome.html");
    res.send(firstName);  
  })
  server.post('/welcome.html',(req,res)=>{
    res.sendFile(__dirname+"/welcome.html");  
  })
server.listen(port,function(){
    console.log(`http://localhost:${port}`);
})