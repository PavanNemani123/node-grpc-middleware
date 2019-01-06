const grpc = require('grpc');

// protoPath = require('path').join(__dirname, '../..', 'protos');
const notesProto = grpc.load('protos/notes.proto');

const server = new grpc.Server();

const notes = [
    {id: '1', title: 'Text book', content: 'This is a test book'},
    {id: '2', title: 'Note book', content: 'this is a note book'}
]

server.addService(notesProto.notes.NotesService.service, {
    list: (_, callback) =>{
        callback(null, notes)
    },
});

server.bind('0.0.0.0:8081', grpc.ServerCredentials.createInsecure());
console.log('server running at localhost:8081');

server.start();
