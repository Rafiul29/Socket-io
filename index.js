const express=require("express");
const app=express();
const http=require('http');

const expressServer = http.createServer(app);

const {Server, Socket}=require('socket.io');
const io=new Server(expressServer);

io.on('connection',function(Socket){
    console.log("New User Connected");
    // Socket.on('disconnect',function(){
    //     console.log("User Disconnected");
    // })
    setTimeout(function(){
        Socket.send("Server side - Client side")
    },10000)
})

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(4000,function(){
    console.log("Server run @ 4000");
})