import _ from './lib/lodash';
import frequencies from './frequencies';

class Note {
  constructor({ note, octave, interval }) {
    if (!_.isUndefined(interval)) {
      this.interval = interval;
    }

    const frequency = frequencies.get(note, octave);

    Object.assign(this, { octave, note, frequency });
  }
}

export default Note;
