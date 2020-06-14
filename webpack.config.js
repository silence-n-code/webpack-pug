const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.pug'
        })
    ]
}