export type ReadTuple = [object | undefined, boolean, string | undefined];

export type WriteTuple = [(id?: string|number, data?: object) => Promise<void>|void, boolean, string | undefined];

export type AddTuple = [(data?:object) => Promise<void>|void, boolean, string|undefined];

export type ReadProps = {
  data:object | undefined,
  loading: boolean,
  error: string | undefined,
};
