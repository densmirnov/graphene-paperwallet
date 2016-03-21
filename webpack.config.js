var webpack            = require("webpack");
var path               = require('path');
var moduleDirectories  = ["node_modules"];

module.exports = {
    resolve: {
        root: ["app", "plasma2/libraries"],
        modulesDirectories: moduleDirectories,
        extensions: ["", ".js", ".css", ".html", ".json"],
        fallback: [path.resolve(__dirname, "./node_modules")]
    },
    entry: [
      'main.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist"),
    },

    module: {
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//,                     loader: 'imports?jQuery=jquery' },

            { test: /\.js$/, exclude: /node_modules/,      loader: "babel", query: { cacheDirectory: true, presets: ['es2015']} },
            { test: /\.json/,                              loader: "json-loader" },
            { test: /\.(woff|woff2|svg|ttf|eot)([\?]?.*)$/,loader: "file-loader?name=[name].[ext]"},
            { test: /\.css$/,                              loader: "style-loader!css-loader" },
            { test: /\.png$/,                              loader: "file?name=[name].[ext]" },
        ]
    },
    resolveLoader: {
        fallback: [path.resolve(__dirname, "./node_modules")]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    stats:   {colors: true},
};
