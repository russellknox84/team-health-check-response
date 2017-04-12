var nodeExternals = require('webpack-node-externals');
 
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.scss$/,
                use: [{
                loader: "null-loader" 
            }] 
            }
        ]
    }
}; 

