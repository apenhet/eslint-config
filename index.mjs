import unusedImports from 'eslint-plugin-unused-imports'
import stylistic from '@stylistic/eslint-plugin'
import tailwindcss from 'eslint-plugin-tailwindcss'
import nuxt from '@nuxt/eslint-plugin'
import tseslint from 'typescript-eslint'
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
    }), {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            tailwindcss: tailwindcss,
            'unused-imports': unusedImports,
            'nuxt': nuxt
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.vue'],
                sourceType: 'module'
            }
        }
    },
    ...vue.configs['flat/recommended'],
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ],
            'no-undef': 'off',
            'prefer-const': 'error',
            'sort-vars': 'error',
            'prefer-template': 'error',
            'nuxt/prefer-import-meta': 'error',
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 0
                }
            ],
            'tailwindcss/classnames-order': 'error',
            'tailwindcss/no-custom-classname': 'error',
            'tailwindcss/no-contradicting-classname': 'error',
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
    }
]
