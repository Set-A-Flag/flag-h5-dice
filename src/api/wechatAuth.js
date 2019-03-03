export default function(axios, base) {
    return {
        getUserInfo(id) {
            return axios.get(`${base.wechatAuth}/getUserInfo?openId=${id}`)
        }
    }
}