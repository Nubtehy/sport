module.exports = {
  moduleDirectories: ['node_modules', './src'],
  testMatch: ['**/*.test.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  resolver: 'jest-webpack-resolver',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['src/.+/index.js', 'src/.+/.+Style.js'],
  coverageReporters: ['text-summary', 'json', 'html', 'lcovonly'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  moduleNameMapper: {
    '^.+\\.(eot|otf|svg|ttf|woff|png)$': 'identity-obj-proxy',
  },
  setupFiles: ['./shim.js'],
  setupTestFrameworkScriptFile: './jest.setup.js',
  testURL: 'http://localhost/',
};
