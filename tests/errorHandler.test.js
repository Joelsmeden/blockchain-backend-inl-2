import { describe, it, expect, vi } from 'vitest';
import { errorHandler } from '../src/middlewares/errorHandler.js';

describe('Error Handler Middleware', () => {
  it('ska skicka rätt statuskod och felmeddelande när ett custom-fel kasts', () => {
    const err = { status: 422, message: 'Produkten är redan registrerad.' };
    const req = {};
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    const next = vi.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Produkten är redan registrerad.',
    });
  });

  it('ska fall-backa till status 500 och generiskt meddelande om inget angivits', () => {
    const err = new Error();
    const req = {};
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    const next = vi.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internt serverfel' });
  });
});
