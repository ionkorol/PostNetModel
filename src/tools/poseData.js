// api/index.js
import Socket from './socket';
var ip = "192.168.2.251"
var ip = window.location.hostname

var ws = new WebSocket(`ws:/${ip}:2103/ws`);
// var ws = new WebSocket(`ws:/f8ece29245d5.ngrok.io/ws`);


const socket = new Socket(ws);

socket.on('connect', (e) => {
    console.log("video connected")
    socket.on('disconnect', () => {
        console.log("video disconnected");
    });
    
});

export default socket;
