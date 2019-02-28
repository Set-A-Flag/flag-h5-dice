const dev = 'http://www.13idea.com'
const current = dev

module.exports = {
    '/h5/dice': {
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