<template>
    <div class="container categories">
        <div class="row">
            <div class="col-md-12">
                <h2>{{title}}</h2>
                <ul class="list-inline">
                    <li class="post" v-for="category in topCategoryList" :key="category.id">
                        <router-link :to="{ name: 'products', params: {categoryCode:category.categoryCode, categoryName: category.name }}" v-if="category.leaf">
                            <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                            <span>{{category.nameHighlighted}}</span>
                        </router-link>
                        <router-link :to="{name:'subcategories', params: { categoryCode:category.categoryCode, categoryName: category.name}}" v-else>
                            <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                            <span>{{category.nameHighlighted}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
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
        getLevelOneCategoryList : function(categoryList){
            categoryList.forEach(element => {
                if(element.ancestorIds==""){
                    this.topCategoryList.push(element)
                }
            });
        }
    },
    mounted(){
        this.$http.get('/static/category/categoryList.json').then(function(res){
           //this.topCategoryList = res.body.content
           this.getLevelOneCategoryList( res.body.content)
        })
        
    }
}
</script>


<style lang="scss" scoped>
    .categories{
        
        ul{
            li{
                min-width: 23%;
                border: 1px solid #e7e7e7;
                margin: 1%;
                text-align: center;
                padding: 5px;
                border-bottom: 3px solid #e7e7e7;

                span{
                    display: block;
                }

            }
        }
    }
</style>
