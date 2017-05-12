import { expect } from 'chai';
import {
  flipArrayAtIndex,
  tryKeys
} from '../src/utils';

describe('flipArrayAtIndex', () => {
  it('exists', () => {
    expect(flipArrayAtIndex).to.exist;
    expect(flipArrayAtIndex).to.be.a.function;
  });

  it('correctly flips an array at the specified index', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(flipArrayAtIndex(arr, 0)).to.deep.equal([1, 2, 3, 4, 5]);
    expect(flipArrayAtIndex(arr, 2)).to.deep.equal([3, 4, 5, 1, 2]);
    expect(flipArrayAtIndex(arr, 4)).to.deep.equal([5, 1, 2, 3, 4]);
  });
});

describe('tryKeys', () => {
  const frequencies = {
    C: 523.25,
    'C#': 554.37,
    D: 587.33,
    'D#': 622.25,
    E: 659.25,
    F: 698.46,
    'F#': 739.99,
    G: 783.99,
    'G#': 830.61,
    A: 880.00,
    'A#': 932.33,
    B: 987.77,
  };

  it('exists', () => {
    expect(tryKeys).to.exist;
    expect(tryKeys).to.be.a.function;
  });

  it('returns the value of the first existing key', () => {
    expect(tryKeys(frequencies, ['Db', 'C#'])).to.equal(frequencies['C#']);
    expect(tryKeys(frequencies, ['Bb', 'A#'])).to.equal(frequencies['A#']);
    expect(tryKeys(frequencies, ['nothing', 440, 'G'])).to.equal(frequencies.G);
    expect(tryKeys(frequencies, ['nothing', 'missing', 123])).to.be.undefined;
  });
});
