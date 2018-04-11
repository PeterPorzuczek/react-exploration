module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
      "max-len": ["error", { "code": 80 }],
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "class-methods-use-this": 0,
      "import/no-named-as-default": 0,
      "no-unused-expressions": ["error", {
        "allowTernary": true,
        "allowShortCircuit": true}],
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'registration', // for service worker registration
        ]
      }],
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx"]
        }
      ]
    }
  };