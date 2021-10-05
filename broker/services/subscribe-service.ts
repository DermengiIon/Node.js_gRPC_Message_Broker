import { sendUnaryData, ServerUnaryCall } from 'grpc';
import { ISubscriberServer } from '../../proto/subscribe_grpc_pb';
import { SubscribeReplay, SubscribeRequest } from '../../proto/subscribe_pb';
import { TStorage } from '../storage';
export class SubscribeService implements ISubscriberServer {
  subscribe(
    call: ServerUnaryCall<SubscribeRequest>,
    callback: sendUnaryData<SubscribeReplay>,
  ) {
    const conn = getConnection(call);
    const topic = call.request.getTopic();
    const peer = call.getPeer().split(':');
    const address = peer[1];
    const port = Number(peer[2]);
    TStorage.addConnection({ topic, address, port });

    const response = new SubscribeReplay();
    response.setIssuccess(true);
    callback(null, response);
  }
}

function getConnection(call: ServerUnaryCall<SubscribeRequest>) {
  return new Promise((resolve, reject) => {
    call.once('connection', (stream) => {
      console.log('$$$$$$$$$$$', stream);
      resolve(stream);
    });
  });
}
