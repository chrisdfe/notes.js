import _ from 'lodash';
import { expect } from 'chai';
import Scales from '../src/Scales';

describe('Scales', () => {

  it('exists', () => {
    expect(Scales).to.exist;
  });

  describe('#fetch', () => {

    it('exists', () => {
      expect(Scales.fetch).to.exist;
      expect(Scales.fetch).to.be.a.function;
    });

    it('returns an array of Scales', () => {
      expect(Scales.fetch()).to.be.an.array;
    });

    it('retrives values correctly', () => {
      [
        { rootNote: 'D', mode: 'mixolydian' },
        { rootNote: 'B' },
        { rootNote: 'Db', mode: 'harmonic_minor', octave: 5 },
        { rootNote: 'C#', mode: 'harmonic_minor', octave: 3 },
      ].forEach((filterParams) => {
        let results = Scales.fetch(filterParams);

        results.forEach((result) => {
          _.each(filterParams, (value, key) => {
            expect(result[key]).to.equal(value);
          })
        });
      });
    })
  })
});
