import _ from 'lodash/core'
import * as frequencies from './frequencies';

import { octaves } from './octaves';

// TODO - # (sharp) notes as well.
export const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// chromatic
export const notesForOctave = octave => (
  _.map(notes, note => (
    {
      octave,
      note,
      frequency: frequencies.get(note, octave),
    }
  ))
);

export const all = (
  _.chain(octaves)
    .map(notesForOctave)
    .flatten()
    .value()
);
