import frequencies from './frequencies';

class Note {

  constructor(...args) {
  {
      octave,
      note,
      frequency: frequencies.get(note, octave),
    }
  }
}

export default Note;
