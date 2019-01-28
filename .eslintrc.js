module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止使用 _proto_ 属性
    'no-proto': 2,
    // 禁止重复声明
    'no-redeclare': 2,
    // 对象字面量尾不能有逗号
    'comma-dangle': [2, 'never'],
    // 引号类型
    'quotes': [1, 'single'],
    // 强制分号结尾
    'semi': [2, 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
