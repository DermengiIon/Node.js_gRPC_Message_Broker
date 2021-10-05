import { sendUnaryData, ServerUnaryCall } from 'grpc';
import { IPublishServer } from '../../proto/publish_grpc_pb';
import { PublishReplay, PublishRequest } from '../../proto/publish_pb';
import { TStorage } from '../storage';

export class PublishService implements IPublishServer {
  async publishMessage(
    call: ServerUnaryCall<PublishRequest>,
    callback: sendUnaryData<PublishReplay>,
  ) {
    const topic = call.request.getTopic();
    const message = call.request.getMessage();

    console.log(`Received: ${topic} - ${message}`);
    await TStorage.addPayload({ topic, message });

    const response = new PublishReplay();
    response.setIssuccess(true);
    callback(null, response);
  }
}
