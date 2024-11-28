/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['perfectionist'],
  rules: {
    'vue/no-v-html': ['off'],
    'vue/multi-word-component-names': ['off'],
    curly: ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        partitionByNewLine: false,
        groups: [],
        customGroups: {}
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
