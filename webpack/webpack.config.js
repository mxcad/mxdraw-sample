const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: process.env.development === "development" ? "development" : "production",
    plugins: [
        new HtmlWebpackPlugin({
            title: "use mxdraw webpack v5"
        })
    ],
    performance: {
        hints: false,
    },
}