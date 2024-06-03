import unusedImports from 'eslint-plugin-unused-imports'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt(
  {
    files: ['**/*.ts', '**/*.vue', '**/*.mjs'],
    features: { stylistic: true },
    rules: {
      'no-undef': 'off',
      'prefer-const': 'error',
      'sort-vars': 'error',
      'prefer-template': 'error',
      'sort-imports': 'error',
      'import/no-unassigned-import': 'error',
      'nuxt/prefer-import-meta': 'error',
      '@stylistic/indent': ['error', 4],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        'record',
      ],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
    },
  })
  .prepend({
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  })
