/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.tsx",
      options: {
        parser: "typescript",
        jsxSingleQuote: true,
        singleQuote: true,
        trailingComma: "es5",
        arrowParens: "always",
        bracketSpacing: true,
        bracketSameLine: false,
      },
    },
  ],
};
