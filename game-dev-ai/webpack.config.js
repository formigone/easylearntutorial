module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'dist/bundle.r.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    },
    externals: {
        "phaser": "Phaser"
    },
    resolve: {
        extensions: ['', '.js']
    }
}
