const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  },

  configureWebpack: config => {
    // 配置外部依赖的库
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js',
      }),
    );

    // 配置webpack 压缩
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.html$|\.css$/,
        // 超过4kb压缩
        threshold: 4096,
      }),
    );
  },

  transpileDependencies: ['vuetify'],

  // 开发服务器配置
  devServer: {
    host: '0.0.0.0',
    port: 9901,
    // open: 'msedge', // 使用指定的浏览器打开
    proxy: {
      '/json': {
        target: 'http://127.0.0.1:33300',
        pathRewrite: { '^/json': '' },
      },
    },
  },
};
