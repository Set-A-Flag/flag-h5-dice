export default function(axios, base) {
    return {
        getUserInfo(id) {
            return axios.get(`${api.wechatAuth}/getUserInfo?openId=${id}`)
        }
    }
}