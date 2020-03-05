export declare type ReadTuple = [object | undefined, boolean, string | undefined];
export declare type WriteTuple = [(id?: string | number, data?: object) => Promise<void> | void, boolean, string | undefined];
export declare type AddTuple = [(data?: object) => Promise<void> | void, boolean, string | undefined];
export declare type ReadProps = {
    data: object | undefined;
    loading: boolean;
    error: string | undefined;
};
