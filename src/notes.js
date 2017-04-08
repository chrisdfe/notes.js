import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import flatten from 'lodash/fp/flatten';
import assignInAll from 'lodash/fp/assignInAll';

import * as frequencies from './frequencies';

import { octaves } from './octaves';

// TODO - # notes as well.
export const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// chromatic
export const notesForOctave = octave => (
  map(note => (
    {
      octave,
      note,
      frequency: frequencies.get(note, octave),
    }
  ))(notes)
);

export const all = (
  pipe(
    map(notesForOctave),
    flatten,
  )(octaves)
);
