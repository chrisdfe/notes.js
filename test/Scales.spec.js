import _ from 'lodash';
import { expect } from 'chai';
import Scales from '../src/Scales';
import Scale from '../src/Scale';

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
      const results = Scales.fetch();
      expect(results).to.be.an.array;
      expect(results[0]).to.be.an.instanceof(Scale);

      console.log('results');
      console.log(Scales.fetch({ octave: 5, mode: 'harmonic_minor' })[0].notes);
    });

    it('filters scales correctly', () => {
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
