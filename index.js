let isVue2 = false

try {
    isVue2 = require('vue').default.version.startsWith('2')
} catch {
    // Nothing
}

const _extends = [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier'
]

const _plugins = ['sort-imports-es6-autofix', 'unused-imports']

const _prettier = {
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 80,
    tabWidth: 4,
    semi: false,
    arrowParens: 'avoid'
}

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: _extends,
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: _plugins,
    rules: {
        'sort-imports-es6-autofix/sort-imports-es6': ['error'],
        'unused-imports/no-unused-imports': ['error'],
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],
        'prettier/prettier': ['error', _prettier]
    },
    overrides: [
        {
            files: ['**/*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2021,
                sourceType: 'module'
            },
            extends: [
                'eslint:recommended',
                isVue2
                    ? 'plugin:vue/recommended'
                    : 'plugin:vue/vue3-recommended',
                'plugin:prettier-vue/recommended',
                'prettier'
            ],
            rules: {
                'prettier/prettier': ['off'],
                'prettier-vue/prettier': ['error', _prettier],
                'vue/no-v-html': 'off',
                'vue/padding-line-between-blocks': ['error', 'always'],
                'vue/block-tag-newline': ['error'],
                'vue/custom-event-name-casing': ['error', 'kebab-case'],
                'vue/html-button-has-type': ['error'],
                'vue/next-tick-style': ['error', 'promise'],
                'vue/no-duplicate-attr-inheritance': ['error'],
                'vue/no-export-in-script-setup': ['error'],
                'vue/no-unused-properties': ['error'],
                'vue/no-unused-refs': ['error']
            }
        },
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: ['./tsconfig.json'] },
            extends: [
                ..._extends,
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ],
            plugins: [
                'sort-imports-es6-autofix',
                'unused-imports',
                '@typescript-eslint'
            ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            }
        }
    ]
}
