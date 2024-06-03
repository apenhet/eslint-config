import unusedImports from 'eslint-plugin-unused-imports'
import stylistic from '@stylistic/eslint-plugin'
import tailwindcss from 'eslint-plugin-tailwindcss'
import nuxt from '@nuxt/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'
import vue from 'eslint-plugin-vue'

export default [
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
        arrowParens: true,
        blockSpacing: true,
        braceStyle: '1tbs',
        commaDangle: 'never'
    }),
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: parserTs,
                ecmaVersion: 'latest',
                extraFileExtensions: ['.vue'],
                sourceType: 'module'
            }
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off'
        }
    },
    {
        plugins: {
            '@typescript-eslint': pluginTs
        },
        rules: {
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
        name: 'imports',
        plugins: {
            'unused-imports': unusedImports
        },
        rules: {
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },
    {
        name: 'tailwindcss',
        plugins: {
            tailwindcss: tailwindcss
        },
        rules: {

            'tailwindcss/classnames-order': 'error',
            'tailwindcss/no-custom-classname': 'error',
            'tailwindcss/no-contradicting-classname': 'error'
        }
    },
    {
        name: 'nuxt',
        plugins: {
            nuxt: nuxt
        },
        rules: {
            'nuxt/prefer-import-meta': 'error'
        }
    },
    {
        rules: {
            'no-undef': 'off',
            'prefer-const': 'error',
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
            '@stylistic/array-element-newline': [
                'error',
                'always'
            ],
            '@stylistic/array-bracket-newline': [
                'error',
                {
                    minItems: 2
                }
            ],
            '@stylistic/array-bracket-spacing': [
                'error',
                'never'
            ],
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ObjectExpression: 'always',
                    ObjectPattern: {
                        multiline: true, minProperties: 2
                    },
                    ImportDeclaration: 'never',
                    ExportDeclaration: {
                        multiline: true, minProperties: 2
                    }
                }
            ]
        }
    }
]
