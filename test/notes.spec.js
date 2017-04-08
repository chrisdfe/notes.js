import { expect } from 'chai';
import * as notes from '../src/notes';

describe('notes', () => {

  describe('all', () => {
    it('exists', () => {
      expect(notes.all).not.to.be.null;
      expect(notes.all).to.be.an.array;
    })

    it('is an array of note objects', () => {
      const first = notes.all[0];

      expect(first).to.be.an.object;
      expect(first).to.have.all.keys(['note', 'octave', 'frequency']);
    })
  })

  describe('notesForOctave', () => {
    it('exists', () => {
      expect(notes.notesForOctave).to.exist;
      expect(notes.notesForOctave).to.be.a.function;
    })

    it('returns an array of note objects', () => {
      const result = notes.notesForOctave(4);

      expect(result).to.exist;
      expect(result).to.be.an.array;
      expect(result.length).to.equal(12);
      expect(result[0]).to.have.all.keys(['note', 'octave', 'frequency']);
    })
  });
});
