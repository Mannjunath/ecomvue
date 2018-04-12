<template>
    <div>
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
</template>

<script>

export default {
    data(){
        return {
            // posts: [],
            // albums: [],
            photos: []
        }
    },
    mounted(){
        // this.$http.get('https://jsonplaceholder.typicode.com/posts')
        // .then(function(res){
        //     this.posts = res.data;
        // });

        // this.$http.get('https://jsonplaceholder.typicode.com/albums')
        // .then(function(res){
        //     this.albums = res.data;
        // })
        
        this.$http.get('https://jsonplaceholder.typicode.com/photos')
        .then(function(res){
            this.photos = res.data
        })
    },

    methods:{
        post: function(){
            this.$http.post("")
        }
    }
}
</script>

<style>

</style>
