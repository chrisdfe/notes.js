import Note from './Note';
import { notesForScale } from './notes';

class Scale {
  constructor({ rootNote, intervals, mode, octave }) {
    this.rootNote = rootNote;
    this.intervals = intervals;
    this.mode = mode;
    this.octave = octave;

    this.rawNotes = notesForScale(this.rootNote, this.intervals);

    this.notes = this.rawNotes.map((note, index) => (
      new Note({
        note,
        interval: this.intervals[index],
        octave: this.octave,
      })
    ));
  }
}

export default Scale;
