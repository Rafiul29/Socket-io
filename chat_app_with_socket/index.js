const express=require('express')
const app=express();
const http=require('http');
const expressServer=http.createServer(app);



const {Server}=require('Socket.io')
let io=new Server(expressServer);

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");

})
io.on('connection',function(Socket){
    console.log("new user Conncted")
})
 expressServer.listen(2000,function(){
     console.log("Server Running @ 2000");
 })
