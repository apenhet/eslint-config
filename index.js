module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        'parser': '@typescript-eslint/parser',
        'ecmaVersion': 2021,
        'sourceType': 'module'
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    'plugins': [
        'sort-imports-es6-autofix',
        'unused-imports',
        '@typescript-eslint'
    ],
    'rules': {
        'sort-imports-es6-autofix/sort-imports-es6': 'error',
        'unused-imports/no-unused-imports': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 0,
                'maxBOF': 0
            }
        ],
        '@typescript-eslint/semi': [
            'error',
            'never'
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single'
        ],
        '@typescript-eslint/indent': [
            'error',
            2
        ],
        'no-multi-spaces': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_'
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "space-after-keywords": ["error", "always"],
        "object-property-newline": "error",
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "consistent": true
            }
        ],
        "key-spacing": [
            "error",
            {
                "mode": "strict"
            }
        ]
    },
    "overrides": [
        {
            "files": ["*.ts", "*.vue"],
            "rules": {
                "no-undef": "off"
            }
        }
    ]
}