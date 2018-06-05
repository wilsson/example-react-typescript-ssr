const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './server/index.tsx',
    output: {
        path: path.resolve(__dirname, './'),
        filename: './server.js'
    },
    target: 'node',
    externals: nodeExternals(),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
          {
                test: /\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    }
}