import { expect } from 'chai';
import modes from '../src/modes';

describe('modes', () => {

  describe('#intervalsFor', () => {
    // intervalsFor('chromatic') => [0, 1, 2, ...]
    // intervalsFor('aeolian') => [0, 2, 3, ...]
    // After 'registerMode',
    // intervalsFor('phrygian_dominant') => [0, 1, 4, 5, 6, 7]
  })

  desribe('#mode', () => {
    // factory function to define your own scale, with an array of intervals:
    // registerMode('Phrygian Dominant', [0, 1, 4, 5, 6, 7])('C', 4)
    // registerMode('phrygian_dominant', 'Phrygian Dominant', [0, 1, 4, 5, 6, 7])('C', 4)
    //
    // mode('aeolian')('C', 4) => [{ note: C, octave: 4, ... }, { note: B, ... }]
    // OR
    // mode('aeolian')('C')(4) => [{ note: C, octave: 4, ... }, { note: B, octave: 4, ... }]
    // aeolian('C', 4) => [{ note: C, octave: 4, ... }, { note: B, ... }]
    // aeolian('C') => [{ note: C, octave: 1, ... }, ..., { note: C, octave: 8, ... }]

    describe('chromatic', () => {
      const { chromatic } = modes;

      it('exists', () => {
        expect(chromatic).to.exist;
        expect(chromatic).to.be.a.function;
      })

      it('returns an array of letters', () => {
        const result = chromatic('C');

        expect(result).to.exist;
        expect(result).to.be.an.array;
        expect(result.length).to.equal(12);
        expect(result[0]).to.be.a.string;
      })
    });

    describe('chromaticAll', () => {
      const { chromaticAll } = modes;

      it('exists', () => {
        expect(chromaticAll).to.exist;
        expect(chromaticAll).to.be.an.object;
      })

      it('the correct data', () => {
        expect(chromaticAll).to.include.keys(['C', 'Db', 'D', 'Eb', 'B']);
        expect(Object.keys(chromaticAll).length).to.equal(12);

        [
          'Db',
          'Bb',
          'E',
        ].forEach(rootNote => {
          expect(chromaticAll[rootNote]).to.be.an.array;
          expect(chromaticAll[rootNote].length).to.equal(12);
          expect(chromaticAll[rootNote][0]).to.equal(rootNote);
        });
      })
    });
  })

});
