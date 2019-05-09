module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false, // Bundling
      minimize: false     // Minification
    },
    performance: {
      maxAssetSize: 5120000 // Max size of images (5 megabytes)
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerMode: "static"
    }
  }
}
