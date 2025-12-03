// export default {
//   preset: 'vite', // This allows Jest to work with Vite
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JS/JSX files
//   },
//   moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
//   setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Your setup file for testing
//   testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore test files in these directories
// };

// jest.config.js or jest.config.cjs


export default  {
  preset: './jest-preset.js', // Point to your custom preset if applicable
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest to transform JS and JSX files
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Your setup file for testing
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore test files in these directories
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules except for transformed files
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // For CSS modules
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock images
  },
}

