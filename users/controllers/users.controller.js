const grpc = require('grpc');

const proto = grpc.load('protos/users.proto');

const client = new proto.users.UsersService('192.168.1.123:8081', grpc.credentials.createInsecure());

exports.list = (req, res) =>{
    client.listUsers({}, (error, users) => {
        if(!error){
            res.status(200).send(users);
        }else{
            console.log(error);
        }
    });
};