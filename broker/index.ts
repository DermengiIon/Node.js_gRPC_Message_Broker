import { Server, ServerCredentials } from 'grpc';
import { PublishService as GRPCPublishService } from '../proto/publish_grpc_pb';
import { SubscriberService } from '../proto/subscribe_grpc_pb';
import { PublishService } from './services/publish-service';
import { SubscribeService } from './services/subscribe-service';

const server = new Server();
server.addService(GRPCPublishService, new PublishService());
server.addService(SubscriberService, new SubscribeService());

const port = 8888;
const uri = `localhost: ${port}`;

console.log(`Listening on ${uri}`);

server.bind(uri, ServerCredentials.createInsecure());

server.start();
