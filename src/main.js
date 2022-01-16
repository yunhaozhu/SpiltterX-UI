import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from "./axios";
import VueClipboard from "vue-clipboard2";

Vue.prototype.$axios = axios
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
