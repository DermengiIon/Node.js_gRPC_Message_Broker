// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var subscribe_pb = require('./subscribe_pb.js');

function serialize_subscribe_SubscribeReplay(arg) {
  if (!(arg instanceof subscribe_pb.SubscribeReplay)) {
    throw new Error('Expected argument of type subscribe.SubscribeReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_subscribe_SubscribeReplay(buffer_arg) {
  return subscribe_pb.SubscribeReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_subscribe_SubscribeRequest(arg) {
  if (!(arg instanceof subscribe_pb.SubscribeRequest)) {
    throw new Error('Expected argument of type subscribe.SubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_subscribe_SubscribeRequest(buffer_arg) {
  return subscribe_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscriberService = exports.SubscriberService = {
  subscribe: {
    path: '/subscribe.Subscriber/Subscribe',
    requestStream: false,
    responseStream: false,
    requestType: subscribe_pb.SubscribeRequest,
    responseType: subscribe_pb.SubscribeReplay,
    requestSerialize: serialize_subscribe_SubscribeRequest,
    requestDeserialize: deserialize_subscribe_SubscribeRequest,
    responseSerialize: serialize_subscribe_SubscribeReplay,
    responseDeserialize: deserialize_subscribe_SubscribeReplay,
  },
};

exports.SubscriberClient = grpc.makeGenericClientConstructor(SubscriberService);
