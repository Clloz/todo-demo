/*
 * @Author: Clloz
 * @Date: 2020-11-08 19:24:31
 * @LastEditTime: 2020-11-16 00:02:01
 * @LastEditors: Clloz
 * @Description:
 * @FilePath: /todo/.eslintrc.js
 * @symbol_custom_string_obkoro1: 博观而约取，厚积而薄发，日拱一卒，日进一寸。
 */
module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'prettier',
        'plugin:vue/essential',
        '@vue/prettier',
    ],
    parserOptions: {
        ecmaVersion: 11,
        ecmaFeatures: {
            jsx: true,
        },
        parser: 'babel-eslint',
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    plugins: ['prettier', 'html'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                printWidth: 100,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: true,
                jsxSingleQuote: false,
                trailingComma: 'all',
                quoteProps: 'as-needed',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                requirePragma: false,
                insertPragma: false,
                proseWrap: 'preserve',
                htmlWhitespaceSensitivity: 'ignore',
                vueIndentScriptAndStyle: false,
                endOfLine: 'auto',
            },
        ],
        'no-console': ['error', { allow: ['warn', 'error', 'log', 'time'] }],
        'import/no-extraneous-dependencies': 'off',
    },
};
