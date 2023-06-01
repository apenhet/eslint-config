module.exports = {
    root: true,
    parserOptions: {
        project: true,
        extraFileExtensions: ['.vue']
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'autofix'],
    overrides: [
        {
            files: ['**/*.js'],
            parserOptions: {
                project: false
            }
        },
        {
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    rules: {
        'no-undef': 'off',
        'prefer-const': 'error',
        'sort-imports': 'error',
        'autofix/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'autofix/sort-vars': 'error',
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
                default: 'array-simple'
            }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
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
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
            'record'
        ],
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off'
    }
}
