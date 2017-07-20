import _ from './lib/lodash'
import frequencies from './frequencies';
import { getNoteParams } from './utils';

class Note {

  // TODO - support a single argument as well (e.g 'C#4')
  constructor({ note, octave, interval }) {
    if (!_.isUndefined(interval)) {
      this.interval = interval;
    }

    const frequency = frequencies.get(note, octave);

    Object.assign(this, { octave, note, frequency });
  }
}

export default Note;
