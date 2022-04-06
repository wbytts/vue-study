const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

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
    config.plugins.push(
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js',
      }),
    );

    // config.module
    //   .rule('js')
    //   .test(/\.jsx?$/)
    //   // .use('babel-loader')
    //   // .loader('babel-loader')
    //   .exclude.add(path.resolve(/node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/))
    //   .exclude.add(
    //     path.resolve('node_modules/_quill-image-resize-module@3.0.0@quill-image-resize-module/image-resize.min.js'),
    //   )
    //   .end();
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
      // config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); // 好像不对
    }
  },

  transpileDependencies: ['vuetify'],
};
