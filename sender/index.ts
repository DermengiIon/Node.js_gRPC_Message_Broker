import { credentials, ServiceError } from 'grpc';
import * as readline from 'readline';
import { PublishClient } from '../proto/publish_grpc_pb';
import { PublishReplay, PublishRequest } from '../proto/publish_pb';

const port = 8888;
const client = new PublishClient(
  `localhost:${port}`,
  credentials.createInsecure(),
);

function main() {
  console.log('Publisher');

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
  while (true) {
    const topic = await read(rl, 'Topic: ');
    const message = await read(rl, 'Message: ');
    const payload: PublishRequest.AsObject = { topic, message };
    const payloadClass = payloadToClass(payload);

    client.publishMessage(payloadClass, publishMessageResponseCallback);
  }
}

function read(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function payloadToClass({ topic, message }: PublishRequest.AsObject) {
  const payload = new PublishRequest();
  payload.setTopic(topic);
  payload.setMessage(message);
  return payload;
}

function publishMessageResponseCallback(
  error: ServiceError | null,
  response: PublishReplay,
) {
  if (error) {
    console.log('::', error);
    return;
  }

  console.log(`Publish Replay: ${response.getIssuccess()}`);
}

main();
