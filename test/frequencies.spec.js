import { expect } from 'chai';
import * as frequencies from '../src/frequencies';

describe('frequencies', () => {
  describe('get', () => {
    it('exists', () => {
      expect(frequencies.get).to.exist;
      expect(frequencies.get).to.be.a.function;
    });

    it('gets the correct frequency with 2 arguments', () => {
      expect(frequencies.get('A', 4)).to.equal(440)
      expect(frequencies.get('C', 0)).to.equal(16.35)
      expect(frequencies.get('Bb', 1)).to.equal(58.27)
      expect(frequencies.get('A#', 8)).to.equal(7458.62)
    })

    it('gets the correct frequency with 1 argument', () => {
      expect(frequencies.get('A4')).to.equal(440)
      expect(frequencies.get('C0')).to.equal(16.35)
      expect(frequencies.get('Bb1')).to.equal(58.27)
      expect(frequencies.get('A#8')).to.equal(7458.62)
    })

    it('gracefully handles a non-existent note or octave');
  })
});
