const express=require("express");
const app=express();
const http=require('http');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io=new Server(expressServer);


//Namespace connection.........
let buyNsp=io.of("/buy")
buyNsp.on('connection',function(socket){
    buyNsp.emit("MyEvent","hello buy");
})



let sellNsp=io.of("/sell")
sellNsp.on('connection',function(socket){
    sellNsp.emit("MyEvent","hello sell");
})



//broadcasting.......
//io.sockets.emit.................
// io.on('connection',function(socket){
// io.sockets.emit("MyBroadcast","Hello Users !")
// })




app.get('/',function(req,res){
    res.sendFile(__dirname+"/bcast.html");
})

expressServer.listen(5000,function(){
    console.log("Server run @ 5000");
})