const grpc = require('grpc');

const environment = process.env.environment || 'dev';
const config = require('../common/config/env.config')[environment];
// Knex

const db = require('../common/database/knex')[config.environment];
const knex = require('knex')(db);


// protoPath = require('path').join(__dirname, '../..', 'protos');
const usersProto = grpc.load('protos/users.proto');

function listUsers(call, callback){
        knex('user_reg').then ((data) => {callback (null, {users : data});
    });
}

function main(){

    const server = new grpc.Server();

    server.addService(usersProto.users.UsersService.service, {
        listUsers: listUsers
    });

    server.bind('0.0.0.0:8081', grpc.ServerCredentials.createInsecure());
    console.log('server running at localhost:8081');

    server.start();
}

main();