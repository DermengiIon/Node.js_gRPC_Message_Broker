import { Mutex } from 'async-mutex';
import { PublishRequest } from '../proto/publish_pb';
import { ConnectionInfo } from './connection-info';

export class TStorage {
  private static _connections: ConnectionInfo[] = [];
  private static _payloads: PublishRequest.AsObject[] = [];
  static readonly _mutex = new Mutex();

  static get connections() {
    return this._connections;
  }

  static get payloads() {
    return this._payloads;
  }

  static async addConnection(connection: ConnectionInfo) {
    await this._mutex.runExclusive(() => {
      this._connections.push(connection);
    });
  }

  static async addPayload(payload: PublishRequest.AsObject) {
    await this._mutex.runExclusive(() => {
      this._payloads.push(payload);
    });
  }

  static async removeConnection(address: string, port: number) {
    await this._mutex.runExclusive(() => {
      const index = this._connections.findIndex(
        (connection) =>
          connection.address === address && connection.port === port,
      );

      if (index > -1) {
        this._connections.splice(index, 1);
      }
    });
  }

  static getConnectionsByTopic(topic: string): ConnectionInfo[] {
    return this._connections.filter((conn) => conn.topic === topic);
  }
}
