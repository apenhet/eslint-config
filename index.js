let isVue3 = false

try {
    isVue3 = require('vue').default.version.includes('3')
} catch { }

module.exports = {
    'root': true,
    'env': {
        'node': true,
        browser: true,
        es2021: true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    'plugins': [
        'sort-imports-es6-autofix',
        'unused-imports'
    ],
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "no-multi-spaces": "error",
        "comma-dangle": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "semi": [
            "error",
            "never"
        ],
        "arrow-body-style": ["error", "as-needed"],
        "linebreak-style": 0,
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-irregular-whitespace": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 0
            }
        ],
        "object-curly-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": false,
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "indent": ["error", 2],
        "lines-between-class-members": ["error", "always"],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "*" }
        ],
        "no-unsafe-optional-chaining": ["error"],
        "array-callback-return": ["error"],
        "block-scoped-var": ["error"],
        "complexity": ["error", 10],
        "curly": ["error", "multi-or-nest"],
        "no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
        }],
        "no-undef": "off"
    },
    "overrides": [
        {
            "files": ["**/*.vue"],
            'parser': 'vue-eslint-parser',
            'parserOptions': {
                'parser': '@typescript-eslint/parser',
                'ecmaVersion': 2021,
                'sourceType': 'module'
            },
            'extends': [
                isVue3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended'
            ],
            "rules": {
                "vue/no-v-html": "off",
                "vue/max-attributes-per-line": [
                    "error",
                    {
                        "singleline": {
                            "max": 1,
                            "allowFirstLine": false
                        },
                        "multiline": {
                            "max": 1,
                            "allowFirstLine": false
                        }
                    }
                ],
                "indent": "off",
                "@typescript-eslint/indent": ["error", 2]

            }
        },
        {
            "files": ['**/*.ts', '**/*.tsx'],
            'parser': '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json']
            },
            "extends": ["eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"],
            "plugins": ["@typescript-eslint"],
            "rules": {
                "indent": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/indent": ["error", 2],

                "@typescript-eslint/no-unused-vars": ["error", {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_"
                }]
            }
        }
    ]
}
