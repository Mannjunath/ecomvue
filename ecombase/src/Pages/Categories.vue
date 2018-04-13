<template>
  <div class="row">
      <div class="col-md-6">
          <h5>{{title}}</h5>
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
