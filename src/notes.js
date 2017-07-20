import { flipArrayAtIndex } from './utils';

export const majorKeys = {
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

export const whiteNotes = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
];

export const blackNotes = [
  'C#/Db',
  'D#/Eb',
  'F#/Gb',
  'G#/Ab',
  'A#/Bb',
];

export const allNotes = [
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
export const chromatics = rootNote => (
  flipArrayAtIndex(allNotes, allNotes.indexOf(rootNote))
);

// e.g (C, [0, 2, 3, 10])
//   => [C, D, Db, Bb]
export function notesForScale(rootNote, intervals) {
  const keyNotes = chromatics(rootNote);
  return intervals.map(interval => keyNotes[interval]);
}

