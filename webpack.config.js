const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function htmlWebpackPlugin(name){
    return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./app/page/${name}.pug`
    })
}

module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    devServer: {
        host: 'localhost',
        port: 8081,
        stats: 'errors-only',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        htmlWebpackPlugin('index'),
        htmlWebpackPlugin('two'),
        htmlWebpackPlugin('three'),
        htmlWebpackPlugin('five'),
        htmlWebpackPlugin('six')
    ]
}