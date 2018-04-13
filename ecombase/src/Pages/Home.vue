<template>
    <section>
        <app-slider />
        <br />
        <FurCategories />
        <br />
    </section>
</template>

<script>

import banner from '../components/banner';
import FeaturedCategories from '../components/featuredcategories'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    'app-slider': banner,
    'FurCategories': FeaturedCategories
  }
}
</script>

<style lang="scss" scoped>
  
</style>

