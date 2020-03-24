const path = require("path");

module.exports = {
    devServer: {
        compress: true,
        contentBase: path.join(__dirname),
        disableHostCheck: true,
        filename: "bundle.js",
        host: "0.0.0.0",
        port: 3000,
        public: 'gpay.localtest.me',
        allowedHosts: [
            '0.0.0.0',
            '.localtest.me'
        ]
    },
    devtool: "source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            "node_modules",
            "src",
        ],
    },
    node: {
        fs: "empty"
    },     
};