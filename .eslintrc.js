module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@richh-ui/eslint-config`
  extends: ["richh-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
