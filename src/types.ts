export type ReadTuple = [object | undefined, boolean, string | undefined];

export type WriteTuple = [((id:string, data:object) => void)|undefined, boolean, string | undefined];

export type AddTuple = [((data:object) => void)|undefined, boolean, string|undefined];

export type ReadProps = {
  data:object | undefined,
  loading: boolean,
  error: string | undefined,
};
