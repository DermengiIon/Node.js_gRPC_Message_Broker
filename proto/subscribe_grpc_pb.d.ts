// package: subscribe
// file: subscribe.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as subscribe_pb from "./subscribe_pb";

interface ISubscriberService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribe: ISubscriberService_ISubscribe;
}

interface ISubscriberService_ISubscribe extends grpc.MethodDefinition<subscribe_pb.SubscribeRequest, subscribe_pb.SubscribeReplay> {
    path: "/subscribe.Subscriber/Subscribe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<subscribe_pb.SubscribeRequest>;
    requestDeserialize: grpc.deserialize<subscribe_pb.SubscribeRequest>;
    responseSerialize: grpc.serialize<subscribe_pb.SubscribeReplay>;
    responseDeserialize: grpc.deserialize<subscribe_pb.SubscribeReplay>;
}

export const SubscriberService: ISubscriberService;

export interface ISubscriberServer {
    subscribe: grpc.handleUnaryCall<subscribe_pb.SubscribeRequest, subscribe_pb.SubscribeReplay>;
}

export interface ISubscriberClient {
    subscribe(request: subscribe_pb.SubscribeRequest, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
    subscribe(request: subscribe_pb.SubscribeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
    subscribe(request: subscribe_pb.SubscribeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
}

export class SubscriberClient extends grpc.Client implements ISubscriberClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribe(request: subscribe_pb.SubscribeRequest, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
    public subscribe(request: subscribe_pb.SubscribeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
    public subscribe(request: subscribe_pb.SubscribeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscribe_pb.SubscribeReplay) => void): grpc.ClientUnaryCall;
}
