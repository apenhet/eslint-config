const { existsSync } = require('node:fs')
const { join } = require('node:path')

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    extends: hasFile('uno.config.ts')
        ? ['@unocss']
        : hasFile('tailwind.config.ts')
        ? ['plugin:tailwindcss/recommended']
        : [],
    plugins: ['simple-import-sort', 'autofix'],
    overrides: [
        {
            files: ['*.vue', '*.ts'],
            plugins: ['@typescript-eslint'],
            parserOptions: {
                tsconfigRootDir: process.cwd(),
                parser: '@typescript-eslint/parser',
                project: ['./tsconfig.json']
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ],
            rules: {
                '@typescript-eslint/prefer-includes': 'error',
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
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array'
                    }
                ],
                '@typescript-eslint/method-signature-style': [
                    'error',
                    'method'
                ],
                '@typescript-eslint/consistent-indexed-object-style': [
                    'error',
                    'record'
                ],
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/unbound-method': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/prefer-ts-expect-error': 'error'
            }
        },
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                'vue/no-setup-props-destructure': 'off',
                'vue/no-v-html': 'off',
                'vue/multi-word-component-names': 'off',
                'vue/require-default-prop': 'off'
            },
            parserOptions: {
                extraFileExtensions: ['.vue']
            }
        },
        {
            files: ['*.d.ts'],
            rules: {
                'no-unused-vars': 'off',
                'autofix/no-unused-vars': 'off'
            }
        },
        {
            files: ['*'],
            extends: ['plugin:prettier/recommended']
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
        ]
    }
}
function hasFile(file) {
    return existsSync(join(process.cwd(), file))
}
