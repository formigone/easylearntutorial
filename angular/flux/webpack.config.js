module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    externals: {
        'angular': 'angular'
    }
};
