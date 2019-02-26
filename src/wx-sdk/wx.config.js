var wx = require('weixin-js-sdk');
var axios = require('axios');
var sha1 = require('./sha1')

var params = {
    appid: 'wx3abc94d28018f67b',
    appsecret: '782e2d1df576cc62db88542bb47da575',
    noncestr: 'Wm3WZYTPz0wzccnW',
    url: location.href.split('#')[0]
}

// 获取token
function getToken (appid, appsecret) {
    return axios.get(`/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`)
}

// 获取ticket
function getJsapiTicketByToken (token) {
    return axios.get(`/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi`)
}

// 制作签名
function createSignature (params) {
    const str = `jsapi_ticket=${params.jsapi_ticket}&noncestr=${params.noncestr}&timestamp=${params.timestamp}&url=${params.url}`

    return sha1(str)
}

getToken(params.appid, params.appsecret).then(res1 => {
    getJsapiTicketByToken(res1.data.access_token).then(res2 => {
        params['jsapi_ticket'] = res2.data.ticket
        let timestamp = new Date().getTime()
        params['timestamp'] = timestamp

        const signature = createSignature(params)
        console.log(signature)

        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: params.appid, // 必填，公众号的唯一标识
            timestamp: params.timestamp, // 必填，生成签名的时间戳
            nonceStr: params.noncestr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
        });

        wx.error(function(res) {
            alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        });
    
        wx.ready(function() {
            alert("wx-config完成");
            
        });
    })
})
