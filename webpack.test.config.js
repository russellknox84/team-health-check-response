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
<<<<<<< 71074f65a87541abc2479af6fac5c1af033a94c3
}; 
=======
};
>>>>>>> added redux and allow multiple surveys to be created
