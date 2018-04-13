<template>
  <main>
    <app-header></app-header>
    <mainnav></mainnav>
    <router-view/>
  </main>
</template>

<script>
import Header from './Layouts/header'
import MainNav from './Layouts/main_nav'

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
