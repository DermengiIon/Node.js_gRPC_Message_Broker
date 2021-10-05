import { UsersClient } from '../proto/users_grpc_pb';
import { credentials } from 'grpc';

const port = 8888;

export const client = new UsersClient(
  `localhost:${port}`,
  credentials.createInsecure(),
);

export const noop = () => {};
