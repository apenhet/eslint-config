module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        project: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort', 'autofix'],
    overrides: [
        {
            files: ['**/*.js'],
            parserOptions: {
                project: false
            },
            rules: {
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/prefer-includes': 'off'
            }
        },
        {
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                extraFileExtensions: ['.vue']
            },
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ]
        },
        {
            files: ['**/*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ]
        },
        {
            files: ['**/*.d.ts'],
            rules: {
                'autofix/no-unused-vars': 'off'
            }
        }
    ],
    rules: {
        'no-undef': 'off',
        'prefer-const': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'autofix/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'sort-vars': 'error',
        'prefer-template': 'error',
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                printWidth: 80,
                arrowParens: 'avoid',
                singleAttributePerLine: true
            }
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array'
            }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
            'record'
        ],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },

            {
                selector: 'typeLike',
                format: ['PascalCase']
            }
        ],
        '@typescript-eslint/prefer-includes': 'error'
    }
}
