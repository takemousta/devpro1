module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    /*   //no code format here we leave that to prettierrc.js to do the job. */
    "no-unused-vars": "warn",
  },
};
