const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const io = require('socket.io')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
    res.send('ho!')
    console.log("request received");
    io.emit('request received', );;
});

app.get('/login', (req, res) => {
    
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});


app.listen(8080)