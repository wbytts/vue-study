# 如何用webpack搭建一个vue项目

初始化项目：`npm init -y`

## 首先说明需要安装的东西

安装vue：`npm install --save vue`

安装webpack相关工具：`npm install webpack webpack-cli --save-dev`

安装处理vue文件的依赖：`npm install -D vue-loader vue-template-compiler`


## 规划项目结构
src：放代码
dist：打包后的东西
public：放一些公共的模板、资源等

package.json：项目包的描述文件
webpack.config.js：webpack的配置文件

## webpack.config.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Vue Loader v15版本以上，需要引入并配置这个插件！
/*
这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'development',

    // 打包入口
    entry: './src/main.js',

    module: {
        rules: [
            // .vue 文件的处理
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],

    // 配置开发服务器
    devServer: {
        port: 8888,
    }
}
```

## 样式的处理

`npm install css-loader -D`

`npm install vue-style-loader -D`

webpack.config.js
```js

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Vue Loader v15版本以上，需要引入并配置这个插件！
/*
这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'development',

    // 打包入口
    entry: './src/main.js',

    module: {
        rules: [
            // .vue 文件的处理
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // 需要对css进行处理
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],

    // 配置开发服务器
    devServer: {
        port: 8888,
    }
}
```


## 处理资源文件

处理图片资源，webpack需要 file-loader




