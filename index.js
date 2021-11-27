const express=require("express");
const app=express();
const http=require('http');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io=new Server(expressServer);

io.on('connection',function(socket){
    console.log("New User Connected");

    socket.on('myEvent',function(data){
        console.log(data)
    })
    
   //server side to client side data transfer...............
    // Socket.on('disconnect',function(){
    //     console.log("User Disconnected");
    // })

    // setTimeout(function(){
    //     Socket.send("Server side - Client side")
    // },10000)


    // setInterval(() => {
    //     let d=new Date();
    //     let t =d.getTime();
    //    // Socket.send(t);
    //     //custom event ..........
    //     Socket.emit("myevent",t)
    // },10);






})

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(4000,function(){
    console.log("Server run @ 4000");
})