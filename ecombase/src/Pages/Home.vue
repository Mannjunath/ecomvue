<template>
  <div class="continer">
      <div class="row">
          <div class="col-md-12 col-sm-12">
              <h2>Home</h2>
                <ul class="list-inline">
                    <li class="post" v-for="photo in photos" :key="photo.id">
                        <!-- <h3>{{ post.title }}</h3>
                        <p>{{ post.body }}</p> 

                        <p v-for="album in albums" :key="album.id">
                            {{ album.title }}
                        </p>-->
                        <a href=""> <img v-bind:src="photo.url" width="200px;" /> </a> 
                        
                    </li>
                </ul>
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
        this.$http.get('https://jsonplaceholder.typicode.com/photos')
        .then(function(res){
            this.photos = res.data
        })
        
    }
}
</script>

<style>

</style>
