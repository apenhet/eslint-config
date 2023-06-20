const { existsSync } = require('node:fs')
const { join } = require('node:path')

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json']
    },

    ignorePatterns: [
        '**/node_modules/*',
        '**/.nuxt/*',
        '.changeset/*',
        '.github/*'
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ].concat(
        hasFile('uno.config.ts')
            ? ['@unocss']
            : hasFile('tailwind.config.ts')
            ? ['plugin:tailwindcss/recommended']
            : []
    ),
    plugins: ['simple-import-sort', 'autofix'],
    overrides: [
        {
            files: ['*.js'],
            parserOptions: {
                project: false
            }
        },
        {
            files: ['*.vue', '*.ts'],
            plugins: ['@typescript-eslint'],
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
                ]
            }
        },
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
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
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
            }
        ]
    }
}
function hasFile(file) {
    return existsSync(join(process.cwd(), file))
}
