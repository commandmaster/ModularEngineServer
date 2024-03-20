const express = require('express');
const Matter = require('matter-js');

const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server);

const {NetworkManager} = require('./serverClasses');


const networkManager = new NetworkManager(io);


