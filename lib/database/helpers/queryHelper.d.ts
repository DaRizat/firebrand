import { QueryProps } from '../atoms/Query';
declare type BuildQueryProps = {
    database: firebase.database.Database;
    props: QueryProps;
};
declare type QueryFunction = (p: BuildQueryProps) => firebase.database.Reference;
export declare const buildQueryFromProps: QueryFunction;
export {};
