module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/html-indent': ['error', 4],
        'arrow-parens': [2, 'always'],
        indent: ['error', 4],
        semi: [2, 'always'],
        'vue/max-attributes-per-line': [2, {
            singleline: 20,
            multiline: {
            max: 1,
            allowFirstLine: true
        }
    }]
    }
}