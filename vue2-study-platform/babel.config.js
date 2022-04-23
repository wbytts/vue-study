// 所有生产环境
const plugins = [];

if (process.env.NODE_ENV === 'production') {
  // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
  plugins.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn'],
    },
  ]);

  plugins.push('@babel/plugin-transform-react-jsx');
}

// npm install babel-plugin-component -D
// 配置之后，element-ui进行按需引入，可以减少打包体积
// plugins.push([
//   'component',
//   {
//     livraryName: 'element-ui',
//     styleLibraryName: 'theme-chalk'
//   }
// ]);

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@vue/babel-preset-jsx',
      {
        injectH: false,
      },
    ],
  ],
  plugins: [...plugins],
};
