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
          requireAuth: false,
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

router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const token = localStorage.getItem("token")
    if (token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
