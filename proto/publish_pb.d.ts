// package: publish
// file: publish.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PublishReplay extends jspb.Message { 
    getIssuccess(): boolean;
    setIssuccess(value: boolean): PublishReplay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishReplay.AsObject;
    static toObject(includeInstance: boolean, msg: PublishReplay): PublishReplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishReplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishReplay;
    static deserializeBinaryFromReader(message: PublishReplay, reader: jspb.BinaryReader): PublishReplay;
}

export namespace PublishReplay {
    export type AsObject = {
        issuccess: boolean,
    }
}

export class PublishRequest extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): PublishRequest;
    getMessage(): string;
    setMessage(value: string): PublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishRequest;
    static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
    export type AsObject = {
        topic: string,
        message: string,
    }
}
