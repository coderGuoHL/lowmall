import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("../views/home/Home.vue");
const profile = () => import("../views/profile/Profile.vue");
const category = () => import("../views/category/Category.vue");
const cart = () => import("../views/cart/Cart.vue");

Vue.use(VueRouter);

const routes = [
  {path:'/',redirect:'/home' },
  { path: '/home', component: home },
  { path: '/profile', component: profile },
  { path: '/category', component: category },
  { path: '/cart', component: cart },
  // { path: '/detail', component: () => import("views/detall/detail.vue") },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router