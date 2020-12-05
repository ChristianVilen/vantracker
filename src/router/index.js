import Vue from 'vue'
import VueRouter from 'vue-router'
import VanList from "@/views/VanList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: VanList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
