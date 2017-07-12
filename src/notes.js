import _ from './lib/lodash'
import frequencies from './frequencies';
import octaves from './octaves';
import modes from './raw/modes';

import { flipArrayAtIndex } from './utils';

const majorKeys = {
  C: [],
  G: [
    { F: '#' },
  ],
  D: [
    { F: '#' },
    { C: '#' },
  ],
  A: [
    { F: '#' },
    { C: '#' },
    { G: '#' },
  ],
  E: [
    { F: '#' },
    { C: '#' },
    { G: '#' },
    { D: '#' },
  ],
  B: [
    { F: '#' },
    { C: '#' },
    { G: '#' },
    { D: '#' },
    { A: '#' },
  ],
  Gb: [
    { B: 'b' },
    { E: 'b' },
    { A: 'b' },
    { D: 'b' },
    { G: 'b' },
    { C: 'b' },
  ],
  Db: [
    { B: 'b' },
    { E: 'b' },
    { A: 'b' },
    { D: 'b' },
    { G: 'b' },
  ],
  Ab: [
    { B: 'b' },
    { E: 'b' },
    { A: 'b' },
    { D: 'b' },
  ],
  Eb: [
    { B: 'b' },
    { E: 'b' },
    { A: 'b' },
  ],
  Bb: [
    { B: 'b' },
    { E: 'b' },
  ],
  F: [
    { B: 'b' },
  ],
};

const whiteNotes = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B'
];

const blackNotes = [
  'C#/Db',
  'D#/Eb',
  'F#/Gb',
  'G#/Ab',
  'A#/Bb',
];

const allNotes = [
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab',
  'A',
  'A#/Bb',
  'B',
];

// Returns the notes in order for a specified root note
// e.g 'D' => ['D', 'Eb' ... 'C']
//     'B' => ['B', 'C' ... 'Bb']
const chromatics = allNotes.reduce((result, rootNote) => {
  result[rootNote] = flipArrayAtIndex(allNotes, allNotes.indexOf(rootNote));
  return result;
}, {});

function notesForOctave(octave) {
  return _.map(notes, note => (
    {
      octave,
      note,
      frequency: frequencies.get(note, octave),
    }
  ))
}

// const allNotes = (
//   _.chain(octaves.all)
//     .map(notesForOctave)
//     .flatten()
//     .value()
// );

// const keys = (
//   _.chain(notes)
//     .reduce((result, note) => {
//       result[note] = modesForKey(note);
//       return result;
//     }, {})
//     .value()
// );

export default {
  majorKeys,
  whiteNotes,
  blackNotes,
  allNotes,
  // allNotes,
  notesForOctave,
  // modesForKey,
  getChromatic,
  // keys,
};
