import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from "./axios";

Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
