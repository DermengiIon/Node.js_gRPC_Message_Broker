// package: subscribe
// file: subscribe.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SubscribeReplay extends jspb.Message { 
    getIssuccess(): boolean;
    setIssuccess(value: boolean): SubscribeReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeReplay.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeReplay): SubscribeReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeReplay;
    static deserializeBinaryFromReader(message: SubscribeReplay, reader: jspb.BinaryReader): SubscribeReplay;
}

export namespace SubscribeReplay {
    export type AsObject = {
        issuccess: boolean,
    }
}

export class SubscribeRequest extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): SubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
    static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
    export type AsObject = {
        topic: string,
    }
}
