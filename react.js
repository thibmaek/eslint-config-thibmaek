module.exports = {

  extends: [
    require.resolve(`./index`),
    `plugin:react/recommended`,
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    `react`,
  ],

  rules: {
    
    "react/display-name": 0,
    "react/boolean-prop-naming": 2,
    "react/default-props-match-prop-types": 2,
    "react/no-multi-comp": 2,
    "react/no-array-index-key": 2,
    "react/no-unescaped-entities": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-will-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/prefer-es6-class": [2, `always`],
    "react/no-typos": 2,
    "react/sort-comp": 2,
    "react/style-prop-object": 2,
    "react/self-closing-comp": 2,
    "react/require-default-props": 2,
    "react/no-string-refs": 2,
    "react/jsx-wrap-multilines": 2,
    
    "react/jsx-pascal-case": 2,
    "react/jsx-boolean-value": [2, `never`],
    "react/jsx-filename-extension": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-equals-spacing": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-space-before-closing": [2, `always`],
  },

};
