import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Login from "../views/Login";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'/productlist',
    name:'productlist',
    component:ProductList
  },
  {
    path:'/details',
    name:'details',
    component:Details
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
