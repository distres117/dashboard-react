var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals:[nodeExternals()],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    resolve: {
        root: __dirname,
        modulesDirectories:[
            'node_modules',
            './app/components',
            './app/state',
            './app/models'
        ],
        extensions: ['', '.js', '.jsx']
    }
}