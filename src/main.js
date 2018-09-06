// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
// import { WechatPlugin, AjaxPlugin } from 'vux'
import axios from 'axios'




Vue.config.productionTip = false

Vue.use(vuescroll);
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)

Vue.prototype.$axios=axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.http.get('/api', ({data}) => {
//   Vue.wechat.config(data.data)
// })
// router.push({name: 'firstPage', params: {openid: '1'}})