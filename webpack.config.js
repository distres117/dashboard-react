var webpack = require('webpack'),
    path = require('path'),
    BrowserSync = require('browser-sync-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
        ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor:{
        //         warnings: false
        //     }
        // }),
        new BrowserSync({
            host:'localhost',
            port: 3000,
            server: { 
                baseDir:[__dirname]
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories:[
            'node_modules',
            './app/components',
            './app/models',
            './app/state'
        ],
        alias:{
            applicationStyles: 'app/styles/app.scss',
            foundationIcons: 'app/styles/assets/foundation-icons/foundation-icons.css'
        },
        
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
    // sassLoader:{
    //     includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
    // },
}