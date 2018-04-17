<template>
    <div class="container categories">
        <div class="row">
            <div class="col-md-12">
                <h2>{{title}}</h2>
                <ul class="list-inline" v-if="subCategoryList.length>0">
                    <li class="post" v-for="category in subCategoryList" :key="category.id">
                        <router-link :to="{ name: 'products', params: {categoryCode:category.categoryCode, categoryName: category.name }}" v-if="category.leaf">
                            <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                            <span>{{category.nameHighlighted}}</span>
                        </router-link>
                        <router-link :to="{name:'subcategories', params: { categoryCode:category.categoryCode, categoryName:category.name}}" v-else>
                            <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                            <span>{{category.nameHighlighted}}</span>
                        </router-link>
                    </li>
                </ul>
                <div v-else>No Data Found</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Sub Categories",
            subCategoryList: [],
            tempCategoryList: []
        }
    },
    methods:{
        getSubCategoryList : function(categoryList, currentCategoryCode){
            categoryList.forEach(element => {
               if(element.ancestorIds!=""){
                    element.ancestorIds.forEach(elementAncestorId => {
                        if(elementAncestorId== currentCategoryCode){
                            this.subCategoryList.push(element);
                            console.log(element.ancestors.length)
                            if(element.ancestors.length>0){
                                this.title = element.ancestors[0];
                            }
                         }
                    });
                }
            });
            if(this.subCategoryList.length==0){
                 this.title = ""
            }
        }
    },
    mounted(){
        this.$http.get('/static/category/categoryList.json').then(function(res){
            //this.subCategoryList = res.body.content;
            this.getSubCategoryList(res.body.content, this.$route.params.categoryCode);
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


