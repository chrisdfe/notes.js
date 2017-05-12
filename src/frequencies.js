import _ from './lib/lodash';

import raw from './raw/frequencies';

export const all = (() => {

})();

export const inOctave = octave => (
  raw[octave]
);

export const noteInAllOctaves = note => (
  _.mapValues(raw, octave => octave[note])
);

export const get = (...args) => {
  let note, octave;

  if (args.length === 2) {
    [note, octave] = args;
  } else if (args.length === 1) {
    [, note, octave] = /(\w[b|#]?)(\d)/.exec(args[0]);
  }

  if (!_.isUndefined(note) && !_.isUndefined(octave)) {
    return raw[octave][note];
  }
};
