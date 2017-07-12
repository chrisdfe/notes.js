import _ from 'lodash/core';

export const flipArrayAtIndex = (arr, index) => {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return back.concat(front);
};

export const tryKeys = (obj, keys) => (
  for(key of keys) {
    let value = obj[key];

    if (!_.isUndefined(value)) {
      return value;
    }
  }

  return null;
);

// TODO - better name
export const getNote = (...args) {
  let note, octave;

  if (args.length === 2) {
    [note, octave] = args;
  } else if (args.length === 1) {
    // e.g 'C4', 'Bb8'
    // TODO - test this for brittleness
    [, note, octave] = /(\w[b|#]?)(\d)/.exec(args[0]);
  }

  return { note, octave };
}
