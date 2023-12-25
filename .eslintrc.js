/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['dist', '.eslintrc.js', 'node_modules'],
  extends: ["polaris"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "import/extensions": [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: ['react-refresh'],
  globals: {
    __APP_VERSION__: 'readonly',
  },
  rules: {
    // react 18 
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-max-depth": [
      1,
      {
        "max": 10
      }
    ],
    'react-refresh/only-export-components': [
      1,
      {
        allowConstantExport: true
      },
    ],
    'max-lines': [
      1,
      {
        "max": 500,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    'max-nested-callbacks': [1, 10],
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/no-unresolved": [
      2,
      {
        ignore: [
          ".",
        ],
      },
    ],
  },
};