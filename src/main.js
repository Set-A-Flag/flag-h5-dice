import Vue from 'vue'
import App from './App.vue'
import wxConfig from './wx-sdk/wx.config'

// 路由
import router from './router/index'
// 状态管理
import store from './vuex'

// i18n
// axios
// element
// import element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
