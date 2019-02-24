const dev = 'http://www.13idea.com:9002'
const current = dev

module.exports = {
    '/dice': {
        target: current,
        changeOrigin: true
    }
}
// module.exports = {
    
// }