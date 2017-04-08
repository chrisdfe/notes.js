import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import compact from 'lodash/fp/compact';
import first from 'lodash/fp/first';

export const flipArrayAtIndex = arr => (
  (index) => {
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return back.concat(front);
  }
);

export const tryKeys = obj => (
  keys => (
    pipe(
      map(key => obj[key]),
      compact,
      first,
    )(keys)
  )
);
