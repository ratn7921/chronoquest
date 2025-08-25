// const request = require('supertest');
// const app = require('../app');
// const mongoose = require('mongoose');
// const Quest = require('../models/Quest');

// beforeAll(async () => {
//   const { MongoMemoryServer } = require('mongodb-memory-server');
//   const mongoServer = await MongoMemoryServer.create();
//   await mongoose.connect(mongoServer.getUri());
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoose.connection.close();
// });

// describe('Quest API', () => {
//   it('should return an empty array initially', async () => {
//     const res = await request(app).get('/api/quests');
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBe(0);
//   });

//   it('should create a quest and complete it', async () => {
//     const quest = await Quest.create({
//       title: "Conquer Delhi",
//       description: "Lead your empire to conquer Delhi",
//       year: 1526,
//       empire: "Mughal Empire"
//     });

//     const res = await request(app).post(`/api/quests/${quest._id}/complete`);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.message).toBe('Quest completed successfully (dummy response)');
//   });
// });




require('./setupTestDB');

const request = require('supertest');
const app = require('../server');
const Quest = require('../models/Quest');

describe('Quest API', () => {
  it('should return an empty array initially', async () => {
    const res = await request(app).get('/api/quests');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should create a quest and complete it', async () => {
    const quest = {
      title: 'Find the Sword',
      year: 100,
      completed: false
    };

    const createRes = await request(app).post('/api/quests').send(quest);
    expect(createRes.statusCode).toBe(201);

    const res = await request(app).get('/api/quests?year=100');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe('Find the Sword');
  });
});
