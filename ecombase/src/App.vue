<template>
  <div class="container">
    <app-header></app-header>
    <mainnav></mainnav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layouts/header'
import MainNav from './components/layouts/main_nav'

export default {
  components:{
    'app-header': Header,
    'mainnav' : MainNav
  },
  name: 'App'
}
</script>

<style scoped>

</style>
