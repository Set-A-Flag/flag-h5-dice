export default function(axios, base) {
    return {
        // 检查是否有游戏次数
        // true/false  是/否
        checkNumOfGames({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/checkNumOfGames/${account}`)
        },
        // 校验中奖时间是否超过24小时
        // true/false 超过/未超过
        checkPrizesTimes({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/checkPrizesTimes/${account}`)
        },
        // 根据微信账号识别是用户还是店主
        // 
        checkUserOrOwner({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/checkUserOrOwner/${account}`)
        },
        // 是否第一次查看奖品
        // true/false 是/否
        isFirstViewPrizes({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/isFirstViewPrizes/${account}`)
        },
        // 抽奖：是否获得面膜套装
        // true/false 是/否
        isMaskSet({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/isMaskSet/${account}`)
        },
        // 到达面膜格子
        // true/false 第一次中奖面膜/否
        maskLattice({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/maskLattice/${account}`)
        },
        // 全国店主排名
        // 
        ownerRank() {
            return axios.get(`/${base.dice}/ownerRank`)
        },
        // 获取二维码图片接口
        // 
        qrCode({account} = {}) {
            return axios.get(`/${base.dice}/qrCode/${account}`)
        },
        // 查看中奖奖品类型
        queryPrizes({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/queryPrizes/${account}`)
        },
        // 到达问号格子
        questionLattice({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/questionLattice/${account}`)
        },
        // 店主报名接口
        // {
        //     "address": "string",
        //     "attributableAgent": "string",
        //     "name": "string",
        //     "phone": "string",
        //     "storeName": "string"
        // }
        registerStoreOwner(params) {
            return axios.post(`/${base.dice}/registerStoreOwner`, params)
        },
        // 增加店主转发数
        saveForwardingNum({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/saveForwardingNum/${account}`)
        },
        // 保存用户游戏分数
        saveScore({account, score} = {}) {
            if(!account) {
                return null
            }
            return axios.post(`/${base.dice}/saveScore/${account}/${score}`)
        },
        // 保存收货信息
        // {
        //     "account": "string",
        //     "address": "string",
        //     "name": "string",
        //     "receivingCall": "string"
        // }
        saveUserDeliveryInfo(params) {
            return axios.post(`/${base.dice}/saveUserDeliveryInfo`, params)
        },
        // 第一次查看奖品保存号码
        saveUserPhone({account, phone}) {
            return axios.post(`/${base.dice}/saveUserPhone/${account}/${phone}`)
        },
        // 全国用户排名
        userRank() {
            return axios.get(`/${base.dice}/userRank`)
        },
        // 用户分数详情
        userScoreDetails({account} = {}) {
            if(!account) {
                return null
            }
            return axios.get(`/${base.dice}/userScoreDetails/${account}`)
        }
    }
}