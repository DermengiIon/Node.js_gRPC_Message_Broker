import { credentials, ServiceError } from 'grpc';
import * as readline from 'readline';
import { PublishClient } from '../proto/publish_grpc_pb';
import { PublishReplay, PublishRequest } from '../proto/publish_pb';
import { SubscriberClient } from '../proto/subscribe_grpc_pb';
import { SubscribeRequest } from '../proto/subscribe_pb';

const port = 8888;
const client = new SubscriberClient(
  `localhost:${port}`,
  credentials.createInsecure(),
);

function main() {
  console.log('Subscriber');

  const deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + 5);

  client.waitForReady(deadline, readyCallback);
}

async function readyCallback(error: Error | null) {
  if (error) {
    console.log('::', error);
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await infinityReadline(rl);
}

async function infinityReadline(rl: readline.Interface) {
  const topic = await read(rl, 'Topic: ');
  const payload: SubscribeRequest.AsObject = { topic };
  const payloadClass = payloadToClass(payload);

  client.subscribe(payloadClass, subscriberMessageResponseCallback);
}

function read(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function payloadToClass({ topic }: SubscribeRequest.AsObject) {
  const payload = new SubscribeRequest();
  payload.setTopic(topic);
  return payload;
}

function subscriberMessageResponseCallback(
  error: ServiceError | null,
  response: PublishReplay,
) {
  if (error) {
    console.log('::', error);
    return;
  }

  console.log(`Subscriber Replay: ${response.getIssuccess()}`);
}

main();
