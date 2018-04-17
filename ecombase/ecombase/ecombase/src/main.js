// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCurrencyFilter from 'vue-currency-filter'
import VueNumeric from 'vue-numeric'

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(VueCurrencyFilter,{symbol: '$', thousandsSeparator: ',', fractionCount: 2, fractionSeparator: '.', symbolPosition: 'front', symbolSpacing: false})
Vue.use(VueNumeric)

import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
    getSeoUrlText: function(value){
      if(value!=null){
        value = value.trim().toLowerCase().replace(/&[#0-9a-z]+;/g,'').replace(/[^a-zA-Z0-9\-\/\s]+/g,'').replace(/--/g,'-');
      }
      console.log(value);
      return value;
    }
  }
})
