import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import News from '../views/News.vue'
import Product from '../views/Product.vue'

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
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/news/:id',
    name:'news',
    component:News
  },
  {
    path:'/news/list/:nid',
    name:'details',
    component:()=>import('@/views/NewsDetails')
  },
  {
    path:'/products/:id/:type',
    name:'products',
    component:Product
  },
  {
    path:'/product/details/:id',
    name:'productDetails',
    component:()=>import('@/views/ProductDetails')
  },
  {
    path:'/cart',
    name:'cart',
    meta:{
      auth:true
    },
    component:()=>import('@/views/Cart')
  },
  {
    path:'/contact-us',
    name:'contactUs',
    component:()=> import('@/views/Contact')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to,from,next){
  if(to.meta.auth){
    const token=localStorage.getItem('token');
    if(token){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.path}
      })
    }
  }else{
    next();
  }
})



export default router
