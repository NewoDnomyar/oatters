const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,  // Set to true if using Vue Options API
        __VUE_PROD_DEVTOOLS__: false, // Set to false in production
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true // Add this line
      })
    ]
  }
};
