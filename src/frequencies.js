import frequencyMap from 'frequency-map';
import frequencyOctaveMap from 'frequency-map/maps/octaves.json';
import { getNoteParams } from './utils';

export default {
  all: frequencyMap,

  // Supports these formats:
  // get('C', 5)
  // get('C5');
  get(...args) {
    const noteParams = getNoteParams(...args);
    let { note } = noteParams;
    const { octave } = noteParams;

    // frequency-map splits C#/Db up into two separate fields ('C#' and 'Db')
    note = note.split('/')[0];

    if (octave < 0 || octave > 8) {
      throw new Error('octave must be 0-8');
    }

    const frequency = frequencyOctaveMap[octave][note];

    if (!frequency) {
      throw new Error(`No frequency found for ${note}${octave}`);
    }

    return frequency;
  },
};
