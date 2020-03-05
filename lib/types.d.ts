export declare type ReadTuple = [object | undefined, boolean, string | undefined];
export declare type WriteTuple = [((id: string, data: object) => void) | undefined, boolean, string | undefined];
export declare type AddTuple = [((data: object) => void) | undefined, boolean, string | undefined];
export declare type ReadProps = {
    data: object | undefined;
    loading: boolean;
    error: string | undefined;
};
