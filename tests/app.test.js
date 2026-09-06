import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Express API & Error Handling', () => {
  it('POST /transactions - ska neka transaktion om fält saknas (400 Bad Request)', async () => {
    const res = await request(app)
      .post('/transactions')
      .send({ itemId: 'ROLEX-123' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('GET /items/:itemId - ska returnera 404 för en produkt som inte finns', async () => {
    const res = await request(app).get('/items/NON-EXISTENT-ITEM');

    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Produkten hittades inte.');
  });
});
