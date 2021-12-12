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
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': `${__dirname}/src`
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










