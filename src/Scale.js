import _ from './lib/lodash';

import { notesForScale } from './notes';

class Scale {

  constructor({ rootNote, intervals, mode, octave }) {
    this.rootNote = rootNote;
    this.intervals = intervals;
    this.mode = mode;
    this.octave = octave;

    this.notes = notesForScale(this.rootNote, this.intervals);
  }
}

export default Scale;
