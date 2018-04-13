<template>
  <div class="continer">
      <div class="row">
          <div class="col-md-12 col-sm-12">
              <h2>Home</h2>
                <ul>
                    <li class="post" v-for="photo in photos" :key="photo.id">
                     
                        <a href=""> <img v-bind:src="photo.bannerImage.imageName" width="200px;" /> </a> 
                        
                    </li>
                </ul>
          </div>

          <div class="col-md-12 col-sm-12">
              <a href=""><h2>Category</h2></a>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    
    data(){
        return{
            photos:[]
        }
    },
    methods:{

    },
    mounted(){
        this.$http.get('/static/banner/banner.json')
        .then(function(res){
            console.log(res.body.content.bannerValues); 
            this.photos = res.body.content.bannerValues
        })
        
    }
}
</script>

<style>

</style>
