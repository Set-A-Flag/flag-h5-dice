import Vue from 'vue'
import App from './App.vue'

// 路由
import router from './router/index'
// 状态管理
import store from './vuex'

// i18n
// axios
// element

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
