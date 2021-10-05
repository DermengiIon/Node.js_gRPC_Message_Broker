#!/bin/bash
PROTO_DIR=./proto

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=C:/ASUS_X541U/UNIVER2018/SIMESTRUL_VII/PAD/Lab_1_part_2_Users/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=C:/ASUS_X541U/UNIVER2018/SIMESTRUL_VII/PAD/Lab_1_part_2_Users/node_modules/.bin/protoc-gen-ts.cmd \
    --ts_out=${PROTO_DIR} \
    -I ./proto \
    proto/*.proto
