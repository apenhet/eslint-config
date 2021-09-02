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
        "sort-imports-es6-autofix/sort-imports-es6": ["error"],
        "unused-imports/no-unused-imports": ["error"],
        "unused-imports/no-unused-vars": [
            "error",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],
        "space-in-parens": ["error", "never"],
        "prefer-template": "error",
        "quotes": [
            "error",
            "single"
        ],
        "block-spacing": [
            "error",
            "always"],
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
                "maxEOF": 0,
                "maxBOF": 0
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
        "space-infix-ops": ["error", { "int32Hint": false }],
        "template-curly-spacing": ["error", "never"],
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
                "vue/padding-line-between-blocks": ["error", "always"],
                "vue/block-tag-newline": ['error'],

                "vue/custom-event-name-casing": ["error",
                    "kebab-case"
                ],

                "vue/html-button-has-type": ["error"],
                "vue/new-line-between-multi-line-property": ["error"],
                "vue/next-tick-style": ["error", "promise"],
                "vue/no-duplicate-attr-inheritance": ['error'],
                "vue/no-export-in-script-setup": ["error"],
                "vue/no-unused-properties": ['error'],
                "vue/no-unused-refs": ['error'],
                "vue/no-useless-mustaches": ['error'],
                "vue/no-useless-v-bind": "error",
                "vue/prefer-template": "error",
                "vue/array-bracket-spacing": [
                    "error",
                    "always"
                ],
                "vue/template-curly-spacing": ["error", "never"],
                "vue/object-curly-newline": [
                    "error",
                    {
                        "multiline": true
                    }
                ],
                "vue/object-curly-spacing": [
                    "error",
                    "always"
                ],
                "vue/block-spacing": [
                    "error",
                    "always"],
                "vue/object-property-newline": [
                    "error",
                    {
                        "allowAllPropertiesOnSameLine": false
                    }
                ],
                "vue/space-in-parens": ["error", "never"],
                "vue/space-infix-ops": ["error", { "int32Hint": false }],
                "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false }],
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
                "no-undef": "off",
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
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            "plugins": [
                'sort-imports-es6-autofix',
                'unused-imports',
                "@typescript-eslint"
            ],
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
