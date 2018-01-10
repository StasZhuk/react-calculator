const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3030,
            proxy: 'localhost: 8888',
            files: 'client/**/*',
            files: 'index.html'

        })
    ]
};

module.exports = config;