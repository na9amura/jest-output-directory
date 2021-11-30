module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputFile: 'jest-junit.xml',
        noStackTrace: true,
      },
    ],
  ],
}

