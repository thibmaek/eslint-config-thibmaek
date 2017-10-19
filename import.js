module.exports = {

  extends: [
    `import:recommended`,
  ],
  
  plugins: [
    `import`,
  ],

  rules: {
    
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-duplicates': 2,
    'import/unambiguous': 2,
    'import/no-mutable-exports': 2,
    'import/extensions': [2, `always`, { js: `never` }],
    'import/no-named-default': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/first': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-absolute-path': 2,
    'import/no-nodejs-modules': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,
    'import/no-dynamic-require': 2,
    'import/exports-last': 2,
    'import/no-deprecated': 2,
  },

};
