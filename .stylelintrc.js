module.exports = {
  customSyntax: "postcss-html",

  plugins: ["stylelint-order"],

  extends: ["stylelint-config-recess-order", "stylelint-config-recommended-vue/scss"],

  rules: {
    "scss/at-import-partial-extension": "always",
    "scss/no-global-function-names": null,
  },
};
