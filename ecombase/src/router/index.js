import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Categories from '@/pages/Categories'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

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
