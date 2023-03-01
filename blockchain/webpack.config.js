// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// var config = Encore.getWebpackConfig();
// config.node = { fs: 'empty' };
// config.resolve={
//     fallback: {
//         "fs": false,
//         "tls": false,
//         "net": false,
//         "path": false,
//         "zlib": false,
//         "http": false,
//         "https": false,
//         "stream": false,
//         "crypto": false,
//         "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
//     }
// }
// config.plugins=[
//     new NodePolyfillPlugin()
// ]
// module.exports = config;
