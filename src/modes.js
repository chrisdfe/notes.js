import _ from './lib/lodash';
import raw from './raw/modes';
import { notes } from './notes';

import { flipArrayAtIndex } from './utils';

const flipNotesAtIndex = index => (
  flipArrayAtIndex(notes, index)
);

export const intervals = _.mapValues(raw, 'intervals');
export const names = _.mapValues(raw, 'name');
export const handles = _.keys(raw);

// chromatic
export const chromatic = rootNote => (
  flipNotesAtIndex(notes.indexOf(rootNote))
);

export const chromaticAll = (
  _.chain(notes)
    .reduce((total, rootNote) => (
      _.assign(total, { [rootNote]: chromatic(rootNote) })
    ), {})
    .value()
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
