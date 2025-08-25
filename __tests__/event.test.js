// const request = require('supertest');
// const app = require('../app');
// const mongoose = require('mongoose');
// const Event = require('../models/Event');

// beforeAll(async () => {
//   const { MongoMemoryServer } = require('mongodb-memory-server');
//   const mongoServer = await MongoMemoryServer.create();
//   await mongoose.connect(mongoServer.getUri());
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoose.connection.close();
// });

// describe('Event API', () => {
//   it('should return empty events initially', async () => {
//     const res = await request(app).get('/api/events/1700');
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBe(0);
//   });

//   it('should fetch event for a specific year', async () => {
//     await Event.create({
//       title: "Battle of Plassey",
//       description: "Decisive victory for the British East India Company",
//       year: 1757
//     });

//     const res = await request(app).get('/api/events/1757');
//     expect(res.statusCode).toBe(200);
//     expect(res.body[0].title).toBe("Battle of Plassey");
//   });
// });



require('./setupTestDB');

const request = require('supertest');
const app = require('../server');
const Event = require('../models/Event');

describe('Event API', () => {
  it('should return empty events initially', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should fetch event for a specific year', async () => {
    const event = {
      name: 'Battle of Panipat',
      year: 1526
    };

    await request(app).post('/api/events').send(event);

    const res = await request(app).get('/api/events?year=1526');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].name).toBe('Battle of Panipat');
  });
});
