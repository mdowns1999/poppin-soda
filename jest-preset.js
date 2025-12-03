// jest-preset.js
import { defaults } from 'jest-config'

export default {
  ...defaults,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Adjust if you're using TypeScript
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Your setup file for testing
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore test files in these directories
}