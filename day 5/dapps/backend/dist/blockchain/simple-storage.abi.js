"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_STORAGE_ABI = void 0;
exports.SIMPLE_STORAGE_ABI = [
    {
        type: "function",
        name: "getValue",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                type: "uint256",
            },
        ],
    },
    {
        type: "event",
        name: "ValueUpdated",
        inputs: [
            {
                name: "newValue",
                type: "uint256",
                indexed: false,
            },
        ],
    },
];
//# sourceMappingURL=simple-storage.abi.js.map