import _ from './lib/lodash';

import frequencyMap from 'frequency-map';
import frequencyOctaveMap from 'frequency-map/maps/octaves';

export default {
  all: frequencyMap,

  get(...args) {
    let note, octave;

    if (args.length === 2) {
      [note, octave] = args;
    } else if (args.length === 1) {
      // e.g 'C4', 'Bb8'
      // TODO - test this for brittleness
      [, note, octave] = /(\w[b|#]?)(\d)/.exec(args[0]);
    }

    if (!_.isUndefined(note) && !_.isUndefined(octave)) {
      return frequencyOctaveMap[octave][note];
    }
  },

  getMany(arr) {
    return arr.map(get);
  }
};

// inOctave: octave => (
//   frequencyOctaveMap[octave]
// ),

// export const noteInAllOctaves = note => (
//   _.mapValues(frequencyOctaveMap, octave => octave[note])
// );
