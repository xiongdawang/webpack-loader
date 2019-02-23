const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js']
    },
    resolveLoader: {
        alias: {
            "babel-loader": path.join(__dirname, './src/loader/babel-loader.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, './src')]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    devtool: 'eval-source-map'
}
