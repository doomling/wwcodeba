const withSass = require("@zeit/next-sass");

module.exports = withSass({
  publicRuntimeConfig: false,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]"
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.node = {
      fs: "empty"
    };

    config.module.rules.forEach(rule => {
      if (String(rule.test) === String(/\.css$/)) {
        rule.use.forEach(u => {
          if (u.options) {
            u.options.modules = false;
          }
        });
      }
    });

    return config;
  }
});
