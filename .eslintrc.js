module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules:{
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "class-methods-use-this": 0
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ]
};