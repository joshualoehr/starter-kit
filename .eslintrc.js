module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react",
        "react-hooks"
    ],
    "parserOptions": {
        "ecmaFeatures": {
          "jsx": true,
          "modules": true
        }
    },
    "parser": "babel-eslint",
    "globals": {
        "fetch": false
    }
};
