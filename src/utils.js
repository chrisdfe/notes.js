import _ from 'lodash/core';

export const flipArrayAtIndex = (arr, index) => {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return back.concat(front);
};

export const tryKeys = (obj, keys) => (
  _.chain(keys)
    .map(key => obj[key])
    .compact()
    .first()
    .value()
);
