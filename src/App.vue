<template>
  <div id="app">
    <div v-if="routerShow" class="backgroundImg">
      <img src="@/assets/beijing.png">
    </div>
    <router-view v-if="routerShow"/>
  </div>
</template>
<script>
import { wechatAuth } from '@/api'

export default {
  created() {
    if(this.checkProduction()) {
      this.checkLogined()
    } else {
      this.routerShow = true
    }
  },
  data() {
    return {
      routerShow: false
    }
  },
  methods: {
    checkProduction() {
      return process.env.NODE_ENV === 'production'
    },
    async checkLogined() {
      let openId = this.getCookie('openId')
      this.value = openId
      if(!openId) {
        this.toLogin()
      } else {
        let res = await wechatAuth.getUserInfo(openId)
        if(res && res.result) {
          // this.xxx = JSON.stringify(res.result)
          this.$store.commit('setUserInfo', res.result)
          this.routerShow = true
        } else {
          this.toLogin()
        }
      }
    },
    toLogin() {
      let state = 'http://www.13idea.com'
      window.location.href = "http://www.13idea.com/h5/dice/wechatAuth/login" + "?state=" + state;
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
