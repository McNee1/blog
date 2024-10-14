module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:storybook/recommended',
    '@feature-sliced/eslint-config/rules/public-api/lite',
    '@feature-sliced/eslint-config/rules/layers-slices',
    // '@feature-sliced',
    // 'plugin:@conarti/feature-sliced/rules',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist', 'import'],

  rules: {
    'boundaries/element-types': [
      2,
      {
        // Allow or disallow any dependency by default
        default: 'allow',
        // Define a custom message for this rule
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'react-dom/client',
          '@reduxjs/**',
          '**/i18n',
          '**/*.svg',
          '@/shared/*',
          '@/shared/assets/storybook/*',
          '@/app/providers',
          'app/App',
          'app/providers',
          '**/config/storybook/*',
          '**/lib/tests/*',
          '**/**/i18nForTest',
          '@/app/styles/index.scss',
        ],
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    //
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'react',
          'style',

          'app',
          'pages',
          'widgets',
          'features',
          'entities',
          'shared',

          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'object',
          'unknown',
        ],

        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            app: ['app', '@/app/**'],
            pages: ['pages', '@/pages/**'],
            widgets: ['widgets', '@/widgets/**'],
            features: ['features', '@/features/**'],
            entities: ['entities', '@/entities/**'],
            shared: ['shared', '@/shared/**'],
          },

          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [],
      },
    ],
    //
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'line-length',
        order: 'desc',
        groups: ['multiline', 'unknown', 'shorthand'],
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],

    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],
  },
};
