import { expect } from 'chai';
import Key from '../src/Key';
import _ from 'lodash';

describe('Key', () => {

  it('exists', () => {
    expect(Key).to.be.defined;
  });

  describe('constructor', () => {
    let valid;

    beforeEach(() => {
      valid = {};

      [
        // C,
        'Db',
        'Bb',
      ].forEach((rootNote) => {
        valid[rootNote] = new Key(rootNote);
      })
    });

    it('exists', () => {
      _.each(valid, (key) => {
        expect(key).to.exist;
        expect(key).to.be.an.object;
      })
    });

    it('requires a rootNote argument');

    it('assigns modes to itself', () => {
      _.each(valid, (key, rootNote) => {
        [
          'chromatic',
          'ionian',
          'dorian',
          'harmonic_minor',
          'melodic_minor',
        ].forEach((handle) => {
          console.log(handle, key[handle]);

          expect(key[handle]).to.exist;
          expect(key[handle][0]).to.equal(rootNote);
        });
      })

    });
  });

  describe('#getModes', () => {
    it('exists', () => {
      expect(Key).itself.to.respondTo('getModes');
    });

    it('returns a complete list of modes for a corresponding rootNote')
    it('doesn\'t error if a non-existent key is passed in');
  });
});
