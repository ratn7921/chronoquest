// module.exports = {
//   testEnvironment: 'node',
//   testMatch: ['**/__tests__/**/*.test.js']
// };


module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTestDB.js'],
  testMatch: ['**/__tests__/**/*.test.js']
};
