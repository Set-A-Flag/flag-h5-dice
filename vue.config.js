const proxyConfig = require('./proxyConfig')

module.exports = {
    devServer: {
        proxy: proxyConfig,
        open: true
    }
}