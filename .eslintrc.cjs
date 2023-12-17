module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react',
    'import',
    'unused-imports',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // 関数の戻り値の型を明示的に指定する
    '@typescript-eslint/explicit-function-return-type': 'error',

    // 必要な場合にのみアロー関数の本体を使用する
    'arrow-body-style': ['error', 'as-needed'],

    // テンプレートリテラルの使用を推奨
    'prefer-template': 'warn',

    // アロー関数のコールバックの使用を推奨
    'prefer-arrow-callback': 'warn',

    // 未使用のインポートを禁止
    'unused-imports/no-unused-imports': 'error',

    // JSXのブール属性の値を明示的に指定する
    'react/jsx-boolean-value': 'error',

    // JSXの中括弧のスペースを禁止
    'react/jsx-curly-brace-presence': 'error',

    // 自己終了タグを使用する
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // Reactの明示的なimportを禁止する
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
          },
        ],
      },
    ],
    // 型の名前をパスカルケースにする
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // 特定のディレクトリからのimportを禁止する
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // uiコンポーネントにおいて、modelとpageのimportを禁止する
          {
            target: './src/components/ui',
            from: ['./src/components/model', './src/components/page'],
          },
          // modelコンポーネントにおいて、pageのimportを禁止する
          {
            target: './src/components/model',
            from: [
              './src/components/page',
              './node_modules/@radix-ui/',
              './node_modules/react-error-boundary',
            ],
          },
          // pageコンポーネントにおいて、他のpageコンポーネントからのimportを禁止する
          {
            target: './src/components/page/**/index.tsx',
            from: ['./src/components/page/**/index.tsx', './node_modules/@radix-ui/'],
          },
          // appディレクトリ配下においてmodel,uiのimportを禁止する
          {
            target: './src/app/**/page.tsx',
            from: [
              './src/components/model',
              './src/components/ui',
              './node_modules/@radix-ui/',
            ],
          },
        ],
      },
    ],

    // ステートメント間の空行
    'padding-line-between-statements': [
      'error',
      {
        // 特定の宣言の間に空行を設ける
        blankLine: 'always',
        prev: [
          'import',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'export',
          'cjs-export',
          'directive',
          'function',
        ],
        next: [
          'import',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'export',
          'cjs-export',
          'directive',
          'function',
        ],
      },
      // import宣言の間に必要があれば空行を設ける
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],

    // JSXを含むファイルの拡張子を指定します。
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['tsx'],
      },
    ],

    // コンポーネントをarrow関数で定義する
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // importの順序を制御
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],

    // 型のimportにおいてtypeをつけることを推奨
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    '@typescript-eslint/no-import-type-side-effects': ['error'],
  },
}
