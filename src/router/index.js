import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bill from "../pages/Bill";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
      },
      {
        path: 'login',
        component: Login,
        meta: {
          title: 'Sign In'
        },
      },
      {
        path: 'bill',
        component: Bill
      },
      {
        path: 'bill/:billId',
        component: Bill
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
