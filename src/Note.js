import _ from 'lodash/core';
import frequencies from './frequencies';
import { getNoteParams } from './utils';

class Note {

  // TODO - support a single argument as well (e.g 'C#4')
  constructor(...args) {
    const { octave, note } = getNoteParams(...args);

    const frequency = frequencies.get(note, octave);

    Object.assign(this, { octave, note, frequency });
  }
}

export default Note;
