const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

config.plugins.push(
  new BundleAnalyzerPlugin({
    reportTitle: "shell",
    analyzerPort: 8888,
    analyzerMode: "static",
    openAnalyzer: false,
  })
);

module.exports = config;
