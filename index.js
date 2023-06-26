module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue', '.json']
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended'
    ],
    plugins: ['simple-import-sort', 'autofix'],
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            rules: {
                'vue/no-setup-props-destructure': 'off',
                'vue/no-v-html': 'off',
                'vue/multi-word-component-names': 'off',
                'vue/require-default-prop': 'off'
            }
        }
        // {
        //     files: ['*.ts'],
        //     parserOptions: {
        //         project: './tsconfig.json'
        //     },
        //     rules: {
        //         '@typescript-eslint/prefer-includes': 'error',
        //         '@typescript-eslint/array-type': [
        //             'error',
        //             {
        //                 default: 'array'
        //             }
        //         ],
        //         '@typescript-eslint/method-signature-style': [
        //             'error',
        //             'method'
        //         ],
        //         '@typescript-eslint/naming-convention': [
        //             'error',
        //             {
        //                 selector: 'variable',
        //                 format: ['camelCase', 'UPPER_CASE'],
        //                 leadingUnderscore: 'allow',
        //                 trailingUnderscore: 'allow'
        //             },
        //             {
        //                 selector: 'typeLike',
        //                 format: ['PascalCase']
        //             }
        //         ]
        //     }
        // }
    ],
    rules: {
        'no-undef': 'off',
        'prefer-const': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'autofix/no-unused-vars': [
            'error',
            {
                args: 'none',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ],
        'sort-vars': 'error',
        'prefer-template': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
            }
        ],
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
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
            'record'
        ],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        'tailwindcss/no-custom-classname': 'off'
    }
}
