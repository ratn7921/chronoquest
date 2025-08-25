// __tests__/setupTestDB.js
import { connect, disconnect, connection } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await connect(uri);
});

afterAll(async () => {
  await disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  const collections = connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany();
  }
});
