import _ from './lib/lodash';
import rawModes from './raw/modes';
import Octaves from './Octaves';
import Scale from './Scale';

import { allNotes } from './notes';

const allScales = (() => {
  const result = [];

  allNotes.forEach((rootNote) => {
    Octaves.forEach((octave) => {
      _.each(rawModes, ({ name, intervals }, mode) => {
        result.push(new Scale({ rootNote, octave, name, intervals, mode }));
      });
    });
  });

  return result;
})();

class Scales {
  static fetch(params = {}) {
    return _.filter(allScales, params);
  }

  // TODO
  /*
  static register(handle, intervals) {
    if (!handle) {
      throw new Error('"handle" param is required');
    }

    if (!intervals) {
      throw new Error('"intervals" param is required');
    }
  }
  */
}

export default Scales;
