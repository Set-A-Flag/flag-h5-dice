<template>
  <div id="app">
    <div class="backgroundImg">
      <img src="@/assets/beijing.png">
    </div>
    <router-view/>
  </div>
</template>
<script>
import { getCookie } from '@/tools/commonTool.js'
import { wechatAuth } from '@/api'
export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      // let checkPro = this.checkProduction()
      this.checkLogined()
    },
    // checkProduction() {
    //   return process.env.NODE_ENV === 'production'
    // }
    checkLogined() {
      let openId = getCookie('openId')
      // let state = window.location.href
      let state = 'www.13idea.com'
      console.log(state)
      if(!openId) {
        window.location.href = "http://www.13idea.com/h5/dice/wechatAuth/login" + "?state=" + state;
      } else {
        wechatAuth.getUserInfo(openId).then(res => {
          alert(res.nickname)
        })
      }
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
