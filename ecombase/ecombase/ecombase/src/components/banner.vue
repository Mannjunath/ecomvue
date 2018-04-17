<template>
<div>
  <swiper :options="swiperOption" v-if="loadslide">
        <swiper-slide v-for="slider in sliders" v-bind:key="slider.bannerImage.id"><img :src="slider.bannerImage.imageName" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</div>
    
</template>

<script>
export default {
  data () {
   // alert('data');
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
      sliders: [],
      loadslide:false
    }
    
  },
   created(){
    // alert('created');
        this.$http.get('/static/banner/banner.json')
        .then(function(res){
           this.sliders = res.body.content.bannerValues;
           this.loadslide = true;
        })
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
