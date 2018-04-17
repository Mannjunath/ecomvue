<template>
  <main>
    <div class="cimm_stickyPageWrap">
     <app-header />
     <mainnav />
      <router-view/>
    </div>
    <app-footer />
  </main>
</template>

<script>
import Vue from 'vue'
import VueNumeric from 'vue-numeric'
import Header from './Layouts/header'
import MainNav from './Layouts/main_nav'
import Footer from './Layouts/footer'
import appstyle from './scss/appstyle.scss'

export default {
  components:{
    'app-header': Header,
    'mainnav' : MainNav,
    'app-footer': Footer,
    'vue-numeric': VueNumeric
  },
  name: 'App'
}
</script>

<style lang="scss">
    

</style>
