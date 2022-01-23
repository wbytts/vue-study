const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        byred: '#F88',
        bygreen: {
          10086: '#0F8'
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    // 刚学的时候先设置为false，开启的话会给你改很多默认样式，会不习惯
    preflight: false, // 禁用 preflight
  }
}
