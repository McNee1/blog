import type { StateSchema, StateSchemaKey } from '@/app/providers';

interface TestCase<R> {
  expected: R;
  state: DeepPartial<StateSchema>;
}

class SelectorSuite<R> {
  private selector: (state: DeepPartial<StateSchema>) => R;
  private testName: string;

  constructor(selector: (state: DeepPartial<StateSchema>) => R, testName: string) {
    this.selector = selector;
    this.testName = testName;
  }

  runTests(testCases: TestCase<R>[]) {
    describe(this.testName, () => {
      testCases.forEach(({ state, expected }) => {
        let nameTest;

        if (Object.keys(state).length === 0) {
          nameTest = `should work with empty state, expected ${JSON.stringify(
            expected
          )} for { state: {} }`;
        } else {
          const emptyObjects = Object.keys(state)
            .filter(
              (key) =>
                // state[key as StateSchemaKey] &&
                Object.keys(state[key as StateSchemaKey]!).length === 0
            )
            .join('');
          if (emptyObjects.length > 0) {
            nameTest = `should work with empty ${emptyObjects}, expected ${JSON.stringify(
              expected
            )} for { ${emptyObjects}: {} }`;
          } else {
            nameTest = `should return ${JSON.stringify(expected)} when ${Object.keys(
              state
            )
              .map((key) => `${key}: ${JSON.stringify(state[key as StateSchemaKey])}`)
              .join(', ')}`;
          }
        }

        test(nameTest, () => {
          expect(this.selector(state)).toEqual(expected);
        });
      });
    });
  }
}

export class SelectorTestSuite<T> extends SelectorSuite<T> {
  constructor(testFunction: (state: StateSchema) => T, testName: string) {
    super(
      (partialState: DeepPartial<StateSchema>) =>
        testFunction(partialState as StateSchema),
      testName
    );
  }
}
