// __tests__/empire.test.js
require('./setupTestDB'); // this will handle in-memory MongoDB

const request = require('supertest');
const app = require('../app'); // ✅ IMPORTANT: export only the Express app, NOT the server

const Empire = require('../models/Empire');

describe('Empire API', () => {
  it('should return empty array when no empires exist', async () => {
    const res = await request(app).get('/api/empires');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should create and fetch empire for given year', async () => {
    const empireData = {
      name: 'Maurya Empire',
      year: 322
    };

    await request(app).post('/api/empires').send(empireData);

    const res = await request(app).get('/api/empires?year=322');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].name).toBe('Maurya Empire');
  });
});
