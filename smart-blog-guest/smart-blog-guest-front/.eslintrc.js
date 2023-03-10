module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/no-static-inline-styles': 'error',
    'vue/component-tags-order': [
      'error',
      { order: ['template', 'script', 'style'] },
    ],
    'vue/padding-line-between-blocks': 'error',
    'vue/this-in-template': 'error',
    // for adding constructor with default params
    'no-useless-constructor': 'off',
  },
}
