import _ from './lib/lodash'
import rawModes from './raw/modes';
import Octaves from './Octaves';
import Scale from './Scale';

import {
  allNotes,
  notesForScale,
} from './notes';

const allScales = (function() {
  let result = [];

  allNotes.forEach((rootNote) => {
    Octaves.forEach((octave) => {
      _.each(rawModes, ({ name, intervals }, handle) => {
        result.push(new Scale({
          rootNote,
          octave,
          name,
          intervals,
          mode: handle,
        }))
      });
    });
  });

  return result;
})();

class Scales {

  fetch(params = {}) {
    return _.filter(allScales, params);
  }

  // TODO
  register(handle, intervals) {
    if (!handle) {
      throw new Error('"handle" param is required');
    }

    if (!intervals) {
      throw new Error('"intervals" param is required');
    }
  }
}

export default new Scales();
