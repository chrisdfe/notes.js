import _ from './lib/lodash';
import modes from './raw/modes';

import { flipArrayAtIndex } from './utils';

export const intervals = _.mapValues(modes, 'intervals');
export const names = _.mapValues(modes, 'name');
export const handles = _.keys(modes);

// chromatic
export const chromatic = rootNote => (
  flipArrayAtIndex(notes, notes.indexOf(rootNote))
);

// const filterNotes = _.filter(allNotes);

// const filterNotesByMode = (rootNote, mode) => {
//   const intervals = getModeIntervals(mode);
//   const keyNotes = getNotesForKey(rootNote);

//   return filterNotes(note => keyNotes.includes(note.note));
// };
