/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFilesAfterEnv: [
    '<rootDir>/src/__test__/setupTest.js',
  ],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
  coverageReporters: [
    'text-summary',
  ],
};

module.exports = config;
