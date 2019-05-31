const PeerServer = require('peer').PeerServer;
const server = PeerServer({ port: 9000, path: '/warewolf' });

server.on('connection', client => {
    console.log('Có người vừa kết nối');
    console.log(client);
});

server.on('disconnect', client => {
    console.log('Có người vừa ngắt kết nối');
});