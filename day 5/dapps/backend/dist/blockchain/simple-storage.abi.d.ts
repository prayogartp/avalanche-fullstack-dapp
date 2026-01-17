export declare const SIMPLE_STORAGE_ABI: readonly [{
    readonly type: "function";
    readonly name: "getValue";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "ValueUpdated";
    readonly inputs: readonly [{
        readonly name: "newValue";
        readonly type: "uint256";
        readonly indexed: false;
    }];
}];
