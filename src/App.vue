<template>
  <div id="app">
    <div v-if="routerShow" class="backgroundImg">
      <img src="@/assets/beijing.png">
    </div>
    <router-view v-if="routerShow"/>
    cookie: {{cookie}}
    value: {{value}}
    {{hasId}} ang {{xxx}} xxxxxxxx
  </div>
</template>
<script>
import { wechatAuth } from '@/api'

export default {
  created() {
    this.checkLogined()
  },
  data() {
    return {
      hasId: '',
      xxx: '',
      cookie: ''
    }
  },
  methods: {
    // checkProduction() {
    //   return process.env.NODE_ENV === 'production'
    // }
    async checkLogined() {
      let openId = this.getCookie('openId')
      this.value = openId
      let state = 'http://www.13idea.com'

      if(!openId) {
        window.location.href = "http://www.13idea.com/h5/dice/wechatAuth/login" + "?state=" + state;
      } else {
        let res = await wechatAuth.getUserInfo(openId)

        this.xxx = JSON.stringify(res)
        // this.logined = true
      }
    },
    getCookie(name) {
      if (document.cookie.length > 0) {
          let cookies = this.cookie = document.cookie
          if(cookies) {
            let ca = cookies.split(';')
            let fined = ca.filter(item => {
              return item.split('=')[0] == name
            })
            return fined[0].split('=')[1]
          }
      }
      return "";
    }
  }
}
</script>

<style lang="less">
html, body, #app {
  width: 100%;
  height: 100%;
}
.backgroundImg {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  overflow: hidden;
}

// 将所有元素设置为盒模型
* {
  box-sizing: border-box
}
</style>
