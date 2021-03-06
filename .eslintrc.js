module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'indent': 'off',
    "prefer-const": 'off',
    'no-lonely-if': 'off',
    'no-console': 'off',
    'require-await': 'off',
    "vue/singleline-html-element-content-newline": 'off',
    "standard/no-callback-literal": 'off',
    "arrow-parens": 'off'
  },
}
