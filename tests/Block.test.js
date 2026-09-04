import { describe, it, expect } from 'vitest';
import { Block } from '../src/models/Block.js';

describe('Block Model', () => {
  it('ska mine:a ett block och uppfylla PoW-svårighetsgraden', () => {
    const block = new Block(1, '2026-01-01', [], '0');
    const difficulty = 2;

    block.mineBlock(difficulty);

    expect(block.hash.startsWith('00')).toBe(true);
  });
});
