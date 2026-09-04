import crypto from 'node:crypto';

export function canonicalize(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(canonicalize);
  }
  const sortedKeys = Object.keys(obj).sort();
  const result = {};
  for (const key of sortedKeys) {
    result[key] = canonicalize(obj[key]);
  }
  return result;
}

export function calculateHash(data) {
  const jsonString = JSON.stringify(canonicalize(data));
  return crypto.createHash('sha256').update(jsonString).digest('hex');
}
