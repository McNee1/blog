module.exports = {
  preset: 'ts-jest',

  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  globals: {
    _TEST_: 'jest',
    'ts-jest': {
      diagnostics: false,
    },
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        openReport: true,
        inlineSource: true,
      },
    ],
  ],
  // setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
