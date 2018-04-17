import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Pages/Home';
import Categories from '@/Pages/Categories';
import SubCategory from '@/Pages/SubCategory';
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
      path: '/c/:categoryCode/:categoryName',
      name: 'subcategories',
      component: SubCategory
    },
    {
      path: '/l/:categoryCode/:categoryName',
      name: 'products',
      component: Products
    },
    {
      path: '/d/:id',
      name: 'itemDetail',
      component: itemDetail
    }
  ],
  mode: 'history'
});
