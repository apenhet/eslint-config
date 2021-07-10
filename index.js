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
        'plugin:vue/vue3-recommended',
        'plugin:prettier-vue/recommended',
        'prettier',
    ],
    'plugins': [
        'sort-imports-es6-autofix',
        'unused-imports'
    ],
    'rules': {
        'sort-imports-es6-autofix/sort-imports-es6': 'error',
        'unused-imports/no-unused-imports': 'error',
        "prettier-vue/prettier": [
            "error",
            {
                arrowParens: 'avoid',
                singleQuote: true,
                semi: false,
                trailingComma: "none",
            }
        ]
    }
}