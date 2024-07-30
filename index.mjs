import antfu from '@antfu/eslint-config'
import unusedImports from 'eslint-plugin-unused-imports'
import tailwindcss from 'eslint-plugin-tailwindcss'
import ts from '@typescript-eslint/eslint-plugin'
import nuxt from '@nuxt/eslint-plugin'

export default antfu({
   plugins: {
      nuxt,
      tailwindcss,
      ts,
      unusedImports,
   },
   vue: {
      overrides: {
         'vue/attributes-order': 'error',
         'vue/max-attributes-per-line': [
            'error', {
               singleline: 1,
            },
         ],
         'vue/multi-word-component-names': 'off',
         'vue/multiline-html-element-content-newline': 'error',
         'vue/no-multiple-template-root': 'off',
         'vue/prefer-template': 'error',
         'vue/template-curly-spacing': 'error',
      },
   },
   rules: {
      'ts/no-unsafe-declaration-merging': 'off',
      'antfu/if-newline': 'off',
      'antfu/consistent-list-newline': 'off',
      'no-multiple-empty-lines': [
         'error', {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
         },
      ],
      'no-undef': 'off',
      'node/prefer-global/process': 'off',
      'nuxt/prefer-import-meta': 'error',
      'style/array-bracket-newline': [
         'error',
         {
            multiline: true,
         },
      ],
      'style/no-whitespace-before-property': 'error',
      'style/object-curly-newline': [
         'error', {
            consistent: true,
            multiline: true,
         },
      ],
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/prefer-ts-expect-error': 'error',
      'ts/unbound-method': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
         'warn', {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
         },
      ],
   },
   stylistic: {
      indent: 3,
   },
   typescript: true,
})
