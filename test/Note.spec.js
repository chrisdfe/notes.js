import _ from 'lodash';
import { expect } from 'chai';
import Note from '../src/Note';
import { parseNotation } from '../src/utils';

describe('Note', () => {

  it('exists', () => {
    expect(Note).to.exist;
  });

  describe('#constructor', () => {

    it('assigns "note" param to self', () => {
      const note = new Note({ note: 'C', octave: 5 });
      expect(note).to.have.property('note');
      expect(note.note).to.equal('C');
    });

    it('assigns "octave" param to self', () => {
      const note = new Note({ note: 'C', octave: 5 });
      expect(note).to.have.property('octave');
      expect(note.octave).to.equal(5);
    });

    it('assigns optional "interval" param to self', () => {
      const noteWithInterval = new Note({ note: 'C', octave: 5, interval: 2 });
      expect(noteWithInterval).to.have.property('interval');
      expect(noteWithInterval.interval).to.equal(2);

      const noteWithoutInterval = new Note({ note: 'C', octave: 5 });
      expect(noteWithoutInterval).not.to.have.property('interval');
    });

    it('assigns a "frequency" field', () => {
      const note = new Note({ note: 'C', octave: 5 });
      expect(note.frequency).to.exist;
    });

    it('assigns the "frequency" field to the correct value', () => {
      [
        { note: 'C', octave: 5, frequency: 523.25 },
        { note: 'F#', octave: 1, frequency: 46.25 },
        { note: 'D#', octave: 4, frequency: 311.13 },
        { note: 'A#', octave: 8, frequency: 7458.62 },
      ].forEach(({ note, octave, frequency }) => {
        const testNote = new Note({ note, octave });
        expect(testNote.frequency).to.equal(frequency);
      });
    });
  });
});
