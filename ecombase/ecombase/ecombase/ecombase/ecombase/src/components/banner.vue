<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="slider in sliders" v-bind:key="slider.bannerImage.id">
        <a :href="slider.link" target="_blank"><img :src="slider.bannerImage.imageName" /></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          autoplay: {
            delay: 5000,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      sliders: [ ]
    }
  },
    mounted(){
        this.$http.get('/static/banner/banner.json')
        .then(function(res){
            console.log(res.body.content.bannerValues); 
            this.sliders = res.body.content.bannerValues
        })
        
    }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
