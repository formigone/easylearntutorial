module.exports = {
   entry: './js/index.jsx',
   output: {
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
               cacheDirectory: true,
               presets: [
                     'react',
                     'es2015'
               ]
            }
         }
      ]
   },
   externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    jquery: 'jQuery',
  },
   resolve: {
      extensions: ['', '.js', '.jsx']
   }
}
