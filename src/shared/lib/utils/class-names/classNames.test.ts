import { classNames } from './classNames';

describe('classNames', () => {
  test('falsy', () => {
    // @ts-expect-error falsy
    expect(classNames(0, null, false, '', undefined)).toBeFalsy();
  });
  test('object', () => {
    expect(classNames({ foo: false, bar: true, class: false })).toBe('bar');
  });
  test('array', () => {
    expect(classNames([false, 'world', ''])).toBe('world');
  });
  test('conditions', () => {
     
    expect(
      // eslint-disable-next-line no-constant-condition
      classNames([1 != 1 ? false : 'hello', true && 'zero', 0 || null ? 'baz' : 'fizz'])
    ).toBe('hello zero fizz');
  });
  test('string', () => {
    expect(classNames('class1', 'class2', 'class3')).toMatch(/class1 class2 class3/);
  });

  test('mixed types', () => {
    expect(
      classNames(
        {},
        ['class1', false, 'null' && false],
        'class2',
        { hover: true, class3: false },
        undefined,
        []
      )
    ).toBe('class1 class2 hover');
  });
});
