export type ReadTuple = [object | undefined, boolean, string | undefined];

export type WriteTuple = [(data: object) => void, boolean, string | undefined];

export type ReadProps = {
  data:object | undefined,
  loading: boolean,
  error: string | undefined,
};
