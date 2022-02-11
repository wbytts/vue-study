const colors = require('tailwindcss/colors');

module.exports = {
  corePlugins: {
    // 刚学的时候先设置为false，开启的话会给你设置很多默认样式(目的是消除各种浏览器之间的不一致性)
    preflight: false, // 禁用 preflight
  },
  content: [],
  theme: {
    extend: {
      colors: {
        byred: '#F88',
        bygreen: {
          10086: '#0F8',
        },
      },
    },
  },
  plugins: [],
};
