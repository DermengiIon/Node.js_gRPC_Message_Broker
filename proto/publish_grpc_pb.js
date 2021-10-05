// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var publish_pb = require('./publish_pb.js');

function serialize_publish_PublishReplay(arg) {
  if (!(arg instanceof publish_pb.PublishReplay)) {
    throw new Error('Expected argument of type publish.PublishReplay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_publish_PublishReplay(buffer_arg) {
  return publish_pb.PublishReplay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_publish_PublishRequest(arg) {
  if (!(arg instanceof publish_pb.PublishRequest)) {
    throw new Error('Expected argument of type publish.PublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_publish_PublishRequest(buffer_arg) {
  return publish_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PublishService = exports.PublishService = {
  publishMessage: {
    path: '/publish.Publish/PublishMessage',
    requestStream: false,
    responseStream: false,
    requestType: publish_pb.PublishRequest,
    responseType: publish_pb.PublishReplay,
    requestSerialize: serialize_publish_PublishRequest,
    requestDeserialize: deserialize_publish_PublishRequest,
    responseSerialize: serialize_publish_PublishReplay,
    responseDeserialize: deserialize_publish_PublishReplay,
  },
};

exports.PublishClient = grpc.makeGenericClientConstructor(PublishService);
