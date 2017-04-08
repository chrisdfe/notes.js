import pipe from 'lodash/fp/pipe';
import mapValues from 'lodash/fp/mapValues';
import map from 'lodash/fp/map';
import assignInAll from 'lodash/fp/assignInAll';
import keys from 'lodash/fp/keys';

import raw from './raw/modes';
import * as notes from './notes';

import { flipArrayAtIndex } from './utils';

const flipNotesAtIndex = flipArrayAtIndex(notes.notes);

const mapModeKey = key => (
  mapValues(key)(raw)
);

export const intervals = mapModeKey('intervals');
export const names = mapModeKey('name');
export const modeNames = keys(raw);

// chromatic
export const chromatic = rootNote => (
  pipe(
    note => notes.notes.indexOf(note),
    flipNotesAtIndex,
  )(rootNote)
);

export const chromaticAll = (
  pipe(
    map(rootNote => ({ [rootNote]: chromatic(rootNote) })),
    assignInAll,
  )(notes.notes)
);

// const getMode = mode => (
//   modes[mode]
// );

// const getModeIntervals = (mode) => (
//   getMode(mode).intervals
// );

// const filterNotes = filter(allNotes);

// const filterNotesByMode = (rootNote, mode) => {
//   const intervals = getModeIntervals(mode);
//   const keyNotes = getNotesForKey(rootNote);

//   return filterNotes(note => keyNotes.includes(note.note));
// };
