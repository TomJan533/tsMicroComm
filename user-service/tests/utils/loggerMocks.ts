import logger from '../../src/logger';

/**
 * jestMockLogger - Mocks the logger module to prevent actual logging in tests.
 * Use this mock by default to disable logging output during most tests to keep test output clean.
 * If logging behavior needs to be tested, create custom mocks in specific test files.
 */
export function jestMockLogger() {
  jest.mock('../../src/logger', () => {
    return {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      verbose: jest.fn()
    };
  });
}
