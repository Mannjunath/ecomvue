import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home'
import Categories from '@/Pages/Categories'
import Header from '@/Layouts/header'
import Footer from '@/Layouts/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: Categories
    }
  ]
})
