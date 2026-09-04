import { describe, it, expect } from 'vitest';
import { canonicalize, calculateHash } from '../src/utils/serializer.js';

describe('Serializer Utility', () => {
  it('ska sortera nycklar i ett objekt alfabetiskt', () => {
    const input = { b: 1, a: 2 };
    const expected = { a: 2, b: 1 };
    expect(canonicalize(input)).toEqual(expected);
  });

  it('ska ge samma hash oavsett ordning på nycklar i objektet', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };

    expect(calculateHash(obj1)).toBe(calculateHash(obj2));
  });
});
