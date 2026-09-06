import { describe, it, expect, beforeEach } from 'vitest';
import { Blockchain } from '../src/models/Blockchain.js';

describe('Blockchain Business Logic', () => {
  let chain;

  beforeEach(() => {
    chain = new Blockchain();
  });

  it('ska kunna registrera en ny produkt', () => {
    const tx = { type: 'REGISTER', itemId: 'ROLEX-123', owner: 'Alice' };
    chain.addTransaction(tx);

    expect(chain.pendingTransactions).toHaveLength(1);
  });

  it('ska kasta ett fel om man försöker registrera samma produkt två gånger', () => {
    const tx = { type: 'REGISTER', itemId: 'ROLEX-123', owner: 'Alice' };
    chain.addTransaction(tx);
    chain.minePendingTransactions(1);

    expect(() => chain.addTransaction(tx)).toThrowError(
      "Produkten 'ROLEX-123' är redan registrerad.",
    );
  });

  it('ska kasta ett fel om man försöker överföra en produkt som inte finns', () => {
    const tx = {
      type: 'TRANSFER',
      itemId: 'OKÄND-SKO',
      owner: 'Bob',
      from: 'Alice',
    };

    expect(() => chain.addTransaction(tx)).toThrowError(
      "Produkten 'OKÄND-SKO' hittades inte.",
    );
  });
});
