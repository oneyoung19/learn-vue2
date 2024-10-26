const { lintExtends, lintRules } = require('./eslintconfig')('prettier')

module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [...lintExtends],
	parserOptions: {
		// @babel/eslint-parser can transform new grammar better than default espree
		parser: '@babel/eslint-parser',
		babelOptions: {
			parserOpts: {
				// Support parse jsx
				plugins: ['jsx']
			}
		}
	},
	rules: {
		...lintRules
	}
}
