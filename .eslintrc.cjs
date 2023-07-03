module.exports = {
  // node:true则支持require的导包
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
    amd: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    // 'react-refresh/only-export-components': 'warn',
    // 关掉require提示
    '@typescript-eslint/no-var-requires': 0
  }
}
