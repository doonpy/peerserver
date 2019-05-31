const PeerServer = require('peer').PeerServer;
const server = PeerServer({ port: 443, path: '/warewolf' });

server.on('connection', client => {
    console.log('DMM');
});

server.on('disconnect', client => {
    console.log('Cut cmm đe');
});