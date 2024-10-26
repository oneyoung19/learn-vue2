const configExtends = {
	// transform plugin:vue/essential in '@vue/cli-plugin-eslint' to plugin:vue/recommended
	base: ['plugin:vue/recommended'],
	standard: ['@vue/standard'],
	prettier: [
		'eslint:recommended',
		// plugin:prettier/recommended will enable eslint-config-prettier and eslint-plugin-prettier and some rules.
		'plugin:prettier/recommended'
	]
}

const configRules = {
	base: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off'
	},
	standard: {
		'vue/html-closing-bracket-newline': 'off'
	},
	prettier: {
		// Make function space in vue template, but don't use. Eslint will conflict with Prettier.
		// 'space-before-function-paren': 'error',
		'no-unused-vars': [
			'error',
			{
				// Don't lint unused function params
				args: 'none'
			}
		],
		// Keep the element closing itself when not contain content.
		'vue/html-self-closing': [
			'error',
			{
				// https://eslint.vuejs.org/rules/html-self-closing.html#vue-html-self-closing
				html: {
					void: 'any'
				}
			}
		]
	}
}

exports.getExtends = function (type = 'prettier') {
	if (type === 'base') {
		return configExtends[type]
	}
	return [...configExtends.base, ...configExtends[type]]
}

exports.getRules = function (type = 'prettier') {
	if (type === 'base') {
		return configRules[type]
	}
	return {
		...configRules.base,
		...configRules[type]
	}
}

module.exports = type => {
	// Recommend to use prettier in team.
	if (type !== 'prettier') {
		throw new Error(`Recommend to use 'prettier' in team.`)
	}
	return {
		lintExtends: exports.getExtends(type),
		lintRules: exports.getRules(type)
	}
}
