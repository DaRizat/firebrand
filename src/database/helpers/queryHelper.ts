import fp from 'lodash/fp';
import { QueryProps } from '../atoms/Query';

type BuildQueryProps = {
  database: firebase.database.Database,
  props: QueryProps,
}

type QueryFunction = (p:BuildQueryProps)=>firebase.database.Reference;

const reference = (props:QueryProps) => (database:firebase.database.Database) => {
  return database.ref(props.reference);
};

const addLimitToFirst = (props:QueryProps) => (ref:firebase.database.Reference) => {
  const { limitToFirst } = props;
  return (limitToFirst) ? ref.limitToFirst(limitToFirst) : ref;
};

const addLimitToLast = (props:QueryProps) => (ref:firebase.database.Reference) => {
  const { limitToLast } = props;
  return (limitToLast) ? ref.limitToLast(limitToLast) : ref;
};

const addEndAt = (props:QueryProps) => (ref:firebase.database.Reference) => {
  const { endAt } = props;
  return (endAt) ? ref.endAt(endAt) : ref;
};

const addStartAt = (props:QueryProps) => (ref:firebase.database.Reference) => {
  const { startAt } = props;
  return (startAt) ? ref.startAt(startAt) : ref;
};

const addOrderByChild = (props:QueryProps) => (ref:firebase.database.Reference) => {
  const { orderByChild } = props;
  return (orderByChild) ? ref.orderByChild(orderByChild) : ref;
};

export const buildQueryFromProps:QueryFunction = ({ database, props }) => {
  try {
    const query = fp.pipe(
      reference(props),
      addOrderByChild(props),
      addStartAt(props),
      addEndAt(props),
      addLimitToFirst(props),
      addLimitToLast(props),
    )(database);

    return query;
  } catch (err) {
    throw new Error(err);
  } 
};
