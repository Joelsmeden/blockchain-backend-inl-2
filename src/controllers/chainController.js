import { Blockchain } from '../models/Blockchain.js';

const luxuryChain = new Blockchain();

export const getChain = (req, res) => {
  res.json({
    length: luxuryChain.chain.length,
    isValid: luxuryChain.isChainValid(),
    chain: luxuryChain.chain,
  });
};

export const createTransaction = (req, res, next) => {
  try {
    luxuryChain.addTransaction(req.body);
    res.status(201).json({ message: 'Transaktion tillagd i pending pool.' });
  } catch (err) {
    next(err);
  }
};

export const mineBlock = (req, res, next) => {
  try {
    const difficulty = parseInt(process.env.POW_DIFFICULTY, 10) || 1;
    const block = luxuryChain.minePendingTransactions(difficulty);
    res.status(200).json({ message: 'Ett nytt block har minats!', block });
  } catch (err) {
    next(err);
  }
};

export const getItem = (req, res, next) => {
  const { itemId } = req.params;
  if (!luxuryChain.items.has(itemId)) {
    return next({ status: 404, message: 'Produkten hittades inte.' });
  }
  res.json({ itemId, owner: luxuryChain.items.get(itemId) });
};
