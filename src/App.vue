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
    checkLogined() {
      let openId = this.getCookie('openId')
      this.value = openId
      let state = 'http://www.13idea.com'

      if(!openId) {
        this.hasId = 'no'
        window.location.href = "http://www.13idea.com/h5/dice/wechatAuth/login" + "?state=" + state;
      } else {
        this.hasId = 'yes'
        wechatAuth.getUserInfo(openId).then(res => {
          this.$store.commit('setUserInfo', res)
          
          this.xxx = JSON.stringify(res)
        })
        // this.logined = true
      }
    },
    getCookie(name) {
      if (document.cookie.length > 0) {
          this.cookie = document.cookie
          c_start = document.cookie.indexOf(name + "=")//获取字符串的起点
          if (c_start != -1) {
              
              c_start = c_start + name.length + 1//获取值的起点
              c_end = document.cookie.indexOf(";", c_start)//获取结尾处

              if (c_end == -1) {
                  c_end = document.cookie.length
              }
              //如果是最后一个，结尾就是cookie字符串的结尾
              return decodeURI(document.cookie.substring(c_start, c_end))//截取字符串返回
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
