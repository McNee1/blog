module.exports = 'test-file-stub';

jest.mock('react-inlinesvg', () => {
  const MockedInlineSVG = () => 'svg';

  MockedInlineSVG.displayName = 'ReactInlineSVG';

  return MockedInlineSVG;
});
