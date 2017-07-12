import _ from './lib/lodash';
import modes from './raw/modes';
import notes from './notes';

class Key {
  constructor(rootNote) {
    this.rootNote = rootNote;

    // Assign all scales to self.
    _.assign(this, Key.getModes(this.rootNote));
  }

  static getModes(rootNote) {
    return _.mapValues(modes, ({ name, intervals }) => {
      const keyNotes = notes.getChromatic(rootNote);
      return intervals.map((interval) => keyNotes[interval]);
    });
  }
}

export default Key;
