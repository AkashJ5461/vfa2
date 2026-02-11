const express= require('express');
const http= require('http');
const {Server}= require('socket.io');

const app= express();
const server= http.createServer(app);
const io= new Server(server);

app.use(express.static('public'));

io.on('connection', (socket)=> {
console.log('A user connected:'+ socket.id);

socket.on('disconnet',()=> {
    console.log('user disconnected');
});
});

const PORT= 3000;
server.listen(PORT, ()=> {
    console.log('server is running on http://localhost:${PORT}');

});