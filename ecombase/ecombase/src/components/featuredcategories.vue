<template>
    <div class="container" v-if="topCategoryList.length>0">
        <div class="row">
            <div class="col-md-12">
                <div class="featuredcategories">
                    <div class="blk_title">
                        <h3>{{ blk_title }}</h3>
                    </div>
                    <div class="slidercontent">
                        <!-- swiper -->
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="category in topCategoryList" :key="category.id">
                                 <router-link :to="{ name: 'products', params: {categoryCode:category.categoryCode, categoryName: category.name }}" v-if="category.leaf">
                                    <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                                 </router-link>
                                <router-link :to="{name:'subcategories', params: { categoryCode:category.categoryCode, categoryName: category.name}}" v-else>
                                    <img v-bind:src="category.imagePath" width="180px;" height="180px;" />
                                </router-link>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{
            blk_title: "Featured Categories",
            swiperOption:{
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
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
           this.getLevelOneCategoryList(res.body.content)
        })
        
    }
}
</script>

<style lang="scss" scoped>
    .featuredcategories{
        padding: 20px 0px;
        .blk_title{
            text-transform: uppercase;
            border-bottom: 1px dashed #ed1c24;
            margin-bottom: 20px;
        }
        .swiper-wrapper{
            .swiper-slide{
                text-align: center;
                border: 1px solid #e7e7e7;
                border-bottom: 3px solid #e7e7e7;
            }
        }
    }
</style>

