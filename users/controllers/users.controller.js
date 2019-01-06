const grpc = require('grpc');

const proto = grpc.load('protos/notes.proto');

const client = new proto.notes.NotesService('localhost:8081', grpc.credentials.createInsecure());

exports.list = (req, res) =>{
    client.list({}, (error, notes) => {
        if(!error){
            res.status(200).send(notes);
        }else{
            console.log(error);
        }
    });
};