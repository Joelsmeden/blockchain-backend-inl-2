import { Block } from './Block.js';

export class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.items = new Map();
  }

  createGenesisBlock() {
    return new Block(0, '2026-01-01T00:00:00.000Z', [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  validateTransaction(tx) {
    const { type, itemId, owner } = tx;

    if (!type || !itemId || !owner) {
      throw {
        status: 400,
        message:
          'Transaktionen saknar obligatoriska fält (type, itemId, owner).',
      };
    }

    if (type === 'REGISTER') {
      if (this.items.has(itemId)) {
        throw {
          status: 422,
          message: `Produkten '${itemId}' är redan registrerad.`,
        };
      }
    } else if (type === 'TRANSFER') {
      if (!this.items.has(itemId)) {
        throw { status: 404, message: `Produkten '${itemId}' hittades inte.` };
      }
      const currentOwner = this.items.get(itemId);
      if (tx.from && tx.from !== currentOwner) {
        throw {
          status: 422,
          message: `Nuvarande ägare är '${currentOwner}', inte '${tx.from}'.`,
        };
      }
    } else {
      throw { status: 400, message: `Ogiltig transaktionstyp: '${type}'.` };
    }
    return true;
  }

  addTransaction(tx) {
    this.validateTransaction(tx);
    this.pendingTransactions.push(tx);
  }

  minePendingTransactions(difficulty) {
    if (this.pendingTransactions.length === 0) {
      throw { status: 400, message: 'Inga väntande transaktioner att mina.' };
    }

    const block = new Block(
      this.chain.length,
      new Date().toISOString(),
      this.pendingTransactions,
      this.getLatestBlock().hash,
    );

    block.mineBlock(difficulty);
    this.chain.push(Object.freeze(block));

    for (const tx of this.pendingTransactions) {
      this.items.set(tx.itemId, tx.owner);
    }

    this.pendingTransactions = [];
    return block;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const previous = this.chain[i - 1];

      if (current.hash !== current.computeHash()) return false;
      if (current.previousHash !== previous.hash) return false;
    }
    return true;
  }
}
