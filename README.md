Node gRPC Middleware application

Application which serves as backend for Angular App by providing a REST API and internally exposes a gRPC client which connects to the backend.

Prerequisites

Download and install Node platform from https://nodejs.org/en/download/

Download and install git from https://git-scm.com/downloads

Clone the application from the repository https://github.com/PavanNemani123/node-grpc-middleware.git

Usage

Currently this application serves as both Client and Server. Client exposes a REST and internally establishes gRPC client call. Open 2 terminal windows, go to the root of the application and run the below commands in each of the terminal

node server - This willl start the gRPC server and listens at 8081.

node client - This will start the REST client and listens at 8082.

Open a web browser and enter http://localhost:8082/notes to check the result.


