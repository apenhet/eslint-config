import antfu from '@antfu/eslint-config'
import unusedImports from 'eslint-plugin-unused-imports'
import tailwindcss from 'eslint-plugin-tailwindcss'
import nuxt from '@nuxt/eslint-plugin'

export default antfu({
	plugins: {
		nuxt,
		tailwindcss,
		unusedImports,
	},
	rules: {
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/unbound-method': 'off',
		'no-multiple-empty-lines': ['error', {
			max: 1,
			maxBOF: 0,
			maxEOF: 0,
		}],
		'nuxt/prefer-import-meta': 'error',
		'perfectionist/sort-objects': ['error'],
		'style/array-bracket-newline': ['error', {
			multiline: false,
		}],
		'style/array-bracket-spacing': 'error',
		'style/object-curly-newline': ['error', {
			consistent: true,
			multiline: true,
		}],
		'tailwindcss/classnames-order': 'error',
		'tailwindcss/no-contradicting-classname': 'error',
		'tailwindcss/no-custom-classname': 'error',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': ['warn', {
			args: 'after-used',
			argsIgnorePattern: '^_',
			vars: 'all',
			varsIgnorePattern: '^_',
		}],
		'vue/attributes-order': 'error',
		'vue/max-attributes-per-line': ['error', {
			singleline: 1,
		}],
		'vue/multi-word-component-names': 'off',
		'vue/multiline-html-element-content-newline': 'error',
		'vue/no-multiple-template-root': 'off',
		'vue/prefer-template': 'error',
		'vue/template-curly-spacing': 'error',
	},
	stylistic: {
		indent: 'tab',
	},
})
