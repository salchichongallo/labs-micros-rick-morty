const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = withModuleFederationPlugin({
  name: "mf-home",

  exposes: {
    "./Module": "./projects/mf-home/src/app/app-routing.module",
  },

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
    reportTitle: "mf-home",
    analyzerPort: 8889,
    analyzerMode: "static",
    openAnalyzer: false,
  })
);

module.exports = config;
