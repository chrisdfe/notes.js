import isUndefined from 'lodash/fp/isUndefined';
import pipe from 'lodash/fp/pipe';
import mapValues from 'lodash/fp/mapValues';

import raw from './raw/frequencies';

export const all = (() => {

})();

export const inOctave = octave => (
  raw[octave]
);

export const noteInAllOctaves = note => (
  mapValues(octave => octave[note])(raw)
);

export const get = (...args) => {
  let note, octave;

  if (args.length === 2) {
    [note, octave] = args;
  } else if (args.length === 1) {
    [, note, octave] = /(\w[b|#]?)(\d)/.exec(args[0]);
  }

  if (!isUndefined(note) && !isUndefined(octave)) {
    return raw[octave][note];
  }
};
