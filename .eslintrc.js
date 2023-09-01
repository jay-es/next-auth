module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    '@jay-es/nextjs-no-default-export',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'error', // tsconfig の verbatimModuleSyntax の代わり
    '@typescript-eslint/no-import-type-side-effects': 'error', // tsconfig の verbatimModuleSyntax の代わり
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
};
