const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: false,

  devServer: {
    host: '0.0.0.0',
    port: 9901,
    // open: 'msedge', // 使用指定的浏览器打开
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        pathRewrite: { '^/api': '' },
      },
    },
  },

  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096,
        }),
      );
      // 去除moment里用不到的语言包
      consig.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    }
  },

  transpileDependencies: ['vuetify'],
};
