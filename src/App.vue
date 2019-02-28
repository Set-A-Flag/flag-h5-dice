<template>
  <div id="app">
    <div class="backgroundImg">
      <img src="@/assets/beijing.png">
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log(window.screen.height)
      console.log(window.screen.width)
      let checkPro = this.checkProduction()
      if(checkPro) {
        
      } else {
        
      }
    },
    checkProduction() {
      return process.env.NODE_ENV === 'production'
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
