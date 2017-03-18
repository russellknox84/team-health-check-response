module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: "dist"
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.scss$/,
                use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["./node_modules/govuk_frontend_toolkit/stylesheets/", "./node_modules/govuk-elements-sass/public/sass/"]
                }
            }] 
            }
        ]
    }
}