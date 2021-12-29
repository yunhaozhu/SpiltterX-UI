import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'SplitterX',
    },
    children: [
      {
        path: '',
        component: Home,
        meta: {
          title: 'SplitterX',
        },
      },
      {
        path: 'about',
        component: About,
        meta: {
          title: 'About',
        },
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
