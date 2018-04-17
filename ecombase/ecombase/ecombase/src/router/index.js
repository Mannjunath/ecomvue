import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/Home';
import Categories from '@/Pages/Categories';
import Products from '@/Pages/Products';
import itemDetail from '@/Pages/detailPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/l/:name',
      name: 'products',
      component: Products
    },
    {
      path: '/d/:id',
      name: 'itemDetail',
      component: itemDetail
    }
  ]
});
