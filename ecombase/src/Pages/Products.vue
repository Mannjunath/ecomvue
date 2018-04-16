<template>
    <div class="container categories">
        <div class="row">
            <div class="col-md-12">
                <h2>{{title}}</h2>
                <ul class="list-inline" v-if="itemList.length>0">
                    <li class="post" v-for="items in itemList" :key="items.customerERPId" >
                        <router-link :to="{ name: 'itemDetail', params: { id: items.id }}">
                        <img :src="items.imageName" height="180px;" />
                        <span>{{items.brand}} {{items.manfPartNumber}}</span>
                        </router-link>
                    </li>
                </ul>
                <div v-else> <b>No Item Found</b> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Products",
            itemList: [],
        }
    },
    methods:{
        getItemListByCategoryCode: function(categoryList, currentCategoryCode){
            categoryList.forEach(element => {
                if(element.categoryId==currentCategoryCode){
                     this.itemList.push(element);
                    this.title = element.category;
                }
            });
        }
    },
    mounted(){
        this.$http.get('/static/items/itemList.json').then(function(res){
            //this.itemList = res.body.content
            this.getItemListByCategoryCode(res.body.content, this.$route.params.categoryCode)
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
