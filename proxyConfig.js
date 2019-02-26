const dev = 'http://www.13idea.com:9002'
const current = dev

module.exports = {
    '/dice': {
        target: current,
        changeOrigin: true
    },
    '/cgi-bin': {
        target: 'https://api.weixin.qq.com',
        changeOrigin: true
    }
}
// module.exports = {
    
// }