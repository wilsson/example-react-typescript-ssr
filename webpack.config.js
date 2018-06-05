const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
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