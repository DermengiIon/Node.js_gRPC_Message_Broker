// package: publish
// file: publish.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as publish_pb from "./publish_pb";

interface IPublishService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    publishMessage: IPublishService_IPublishMessage;
}

interface IPublishService_IPublishMessage extends grpc.MethodDefinition<publish_pb.PublishRequest, publish_pb.PublishReplay> {
    path: "/publish.Publish/PublishMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<publish_pb.PublishRequest>;
    requestDeserialize: grpc.deserialize<publish_pb.PublishRequest>;
    responseSerialize: grpc.serialize<publish_pb.PublishReplay>;
    responseDeserialize: grpc.deserialize<publish_pb.PublishReplay>;
}

export const PublishService: IPublishService;

export interface IPublishServer {
    publishMessage: grpc.handleUnaryCall<publish_pb.PublishRequest, publish_pb.PublishReplay>;
}

export interface IPublishClient {
    publishMessage(request: publish_pb.PublishRequest, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
    publishMessage(request: publish_pb.PublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
    publishMessage(request: publish_pb.PublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
}

export class PublishClient extends grpc.Client implements IPublishClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public publishMessage(request: publish_pb.PublishRequest, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
    public publishMessage(request: publish_pb.PublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
    public publishMessage(request: publish_pb.PublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: publish_pb.PublishReplay) => void): grpc.ClientUnaryCall;
}
