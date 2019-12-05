export declare type ReadTuple = [object | undefined, boolean, string | undefined];
export declare type WriteTuple = [(data: object) => void, boolean, string | undefined];
export declare type ReadProps = {
    data: object | undefined;
    loading: boolean;
    error: string | undefined;
};
