import _ from 'lodash';
import { expect } from 'chai';
import Note from '../src/Note';
import { parseNotation } from '../src/utils';

describe('Note', () => {

  it('exists', () => {
    expect(Note).to.exist;
  });

  describe('#constructor', () => {

    it('accepts 2 arguments');
    it('accepts 1 argument');

    it('assigns "note" param to self', () => {
      const note = new Note('C', 5);
      expect(note).to.have.property('note');
      expect(note.note).to.equal('C');
    });

    it('assigns "octave" param to self', () => {
      const note = new Note('C', 5);
      expect(note).to.have.property('octave');
      expect(note.octave).to.equal(5);
    });

    it('assigns a "frequency" field', () => {
      const note = new Note('C', 5);
      expect(note.frequency).to.exist;
    });

    it('assigns the "frequency" field to the correct value', () => {
      const frequencyMap = {
        'C5': 523.25,
        'F#1': 46.25,
        'D#4': 311.13,
        'A#8': 7458.62,
      };

      _.each(frequencyMap, (frequency, notation) => {
        const { note, octave } = parseNotation(notation);
        const testNote = new Note(note, octave);
        expect(testNote.frequency).to.equal(frequency);
      });
    });
  });
});
