import _ from './lib/lodash'

export function parseNotation(notation) {
  // TODO - make less brittle
  // If the format is like this: "C#/Db" then just go with the first one???
  // notation = notation.split('/')[0];
  // except the octave needs to be extracted as well.
  const result = /(\w[b|#]?)(\d)/.exec(notation);

  if (!result) {
    throw new Error(`incorrectly formatted notation - ${notation}`);
  }

  const [, note, octave] = result;

  return { note, octave };
}

//
export function flipArrayAtIndex(arr, index) {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return back.concat(front);
};

//
export function tryKeys(obj, keys) {
  for (let key of keys) {
    let value = obj[key];

    if (!_.isUndefined(value)) {
      return value;
    }
  }
};

// TODO - better name
export function getNoteParams(...args) {
  let note, octave;

  if (args.length >= 2) {
    [note, octave] = args;
  } else if (args.length === 1) {
    // e.g 'C4', 'Bb8'
    const notation = parseNotation(args[0]);
    note = notation.note;
    octave = notation.octave;
  }

  return { note, octave };
}
