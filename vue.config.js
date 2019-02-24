const proxyConfig = require('./proxyConfig')

module.exports = {
    devServer: {
        open: true,
        proxy: proxyConfig
    },
    lintOnSave: false
}