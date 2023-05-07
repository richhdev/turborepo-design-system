module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-richh-ui`
  extends: ["richh-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
