<template>
  <div class="row">
      <div class="col-md-6">
          <h2>{{title}}</h2>
          <ul>
                <li class="post" v-for="category in topCategoryList" :key="category.id">
                    <a href=""> 
                        <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                         <span>{{category.nameHighlighted}}</span>
                     </a> 
                </li>
         </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Categories",
            topCategoryList: []
        }
    },
    methods:{

    },
    mounted(){
        this.$http.get('/static/category/categoryList.json')
        .then(function(res){
            console.log(res.body.content); 
            this.topCategoryList = res.body.content
        })
        
    }
}
</script>

<style>

</style>
