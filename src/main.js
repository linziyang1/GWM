import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import HeaderTop from './components/HeaderTop/HeaderTop.vue'

// 注册全局组件标签
Vue.component('HeaderTop', HeaderTop)


new Vue({
  el: '#app',
  /* components: {
    App
  },
  template: '<App/>' */
  render: h => h(App),
  /* render: function (createElement) {
    return createElement(App)   // return '<App/>'
  } */
  router, // 配置路由器
  store,// 配置状态管理
})
