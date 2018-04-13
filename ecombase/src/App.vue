<template>
  <main>
    <app-header />
    <mainnav />
    <router-view/>
    <app-footer />
  </main>
</template>

<script>
import Header from './Layouts/header'
import MainNav from './Layouts/main_nav'
import Footer from './Layouts/footer'
import appstyle from './scss/appstyle.scss'

export default {
  components:{
    'app-header': Header,
    'mainnav' : MainNav,
    'app-footer': Footer,
  },
  name: 'App'
}
</script>

<style lang="scss">
    

</style>
