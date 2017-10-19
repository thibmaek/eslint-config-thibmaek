module.exports = {

  extends: [
    require.resolve(`./import`),
    `eslint:recommended`,
  ],

  parser: `babel-eslint`,

  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
    es6: true,
  },

  plugins: [
    `babel`,
  ],

  rules: {

    indent: [2, 2],
    quotes: [2, `backtick`],
    semi: [2, `always`],
    "prefer-const": 2,
    "space-infix-ops": 2,
    "quote-props": [2, `as-needed`],
    "no-console": `off`,
    "prefer-template": 2,
    "no-array-constructor": 2,
    "no-new-object": 2,
    "no-unused-vars": [2, {
      ignoreRestSiblings: true,
    }],
    "no-var": 2,
    eqeqeq: [2, `smart`],
    "jsx-quotes": [2, `prefer-single`],
    camelcase: 2,
    "keyword-spacing": [2, {before: true, after: true}],
    "space-in-parens": [2, `never`],
    "space-before-blocks": 2,
    "space-unary-ops": [2, {words: true, nonwords: true, overrides: {"!": false, ".": false}}],
    "semi-spacing": [2, {before: false, after: false}],
    "arrow-spacing": 2,
    "object-curly-spacing": [`off`, `never`],
    "arrow-parens": [2, `as-needed`],
    "key-spacing": 2,
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, `last`],

    "babel/object-curly-spacing": [2, `never`],

  },

};
