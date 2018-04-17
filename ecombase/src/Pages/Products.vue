<template>
    <div class="container categories">
        <div class="row">
            <div class="col-md-12">
                <h2>{{title}}</h2>
                <ul class="gridView clearfix">
                    <li v-for="items in itemList" :key="items.customerERPId" >
                        <div class="sessionImg text-center">
                             <router-link :to="{ name: 'itemDetail', params: { id: items.id }}">
                                <img :src="items.imageName" height="200px;" />
                            </router-link>
                        </div>
                       <div class="skuDetails">
                           <p>
                               <router-link :to="{ name: 'itemDetail', params: { id: items.id }}" class="itmeTitle">
                                <b>{{items.brand}} {{items.manfPartNumber}}</b>
                                </router-link>
                           </p>
                            <p><b>Manufacturers: </b><span>{{ items.manufacturer }}</span></p>
                            <p><b>Brand Name: </b><span>{{ items.brand }}</span></p>
                            <p><b>PN: </b><span>{{ items.partNumber }}</span></p>
                            <p><b>MPN: </b><span>{{ items.manfPartNumber }}</span></p>
                            <p><b>UPC: </b><span>{{ items.upc }}</span></p>
                            <p><b>CPN: </b>
                            <span v-for="cpnList in items.pricingWarehouse.customerPartNumbers" :key="cpnList">
                                {{ cpnList }}
                            </span>
                            </p>
                            <p><b>Available: </b><span>{{ items.warehouses[0].quantityAvailable }}</span></p>
                            <p><b>Min. Order Qty: </b><span>{{ items.minimumOrderQuantity }} </span></p>
                            <p><b>Qty. Interval: </b><span>{{ items.orderQuantityInterval }} </span></p>
                            <p v-if="items.pricingWarehouse.listPrice>items.pricingWarehouse.costPrice"><b>List Price: </b><span><s> {{ items.pricingWarehouse.listPrice | currency}}</s></span></p>
                            <p v-if="items.pricingWarehouse.costPrice>0"><b>Your Price: </b><span> {{ items.pricingWarehouse.costPrice | currency}}</span></p>
                            <p v-else><b>Your Price: </b><span> Call For Price </span></p>
                            <p>
                                <b>Qty </b>  
                                <span>
                                    <input type="text" maxlength="4" v-bind:value="items.minimumOrderQuantity" class="quantity">
                                </span>
                                <span>
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm">Add To Cart</a>
                                </span>
                            </p>
                            <p>
                                <span>Add To Product Group</span>
                            </p>
                       </div>
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
            title: "Products",
            itemList: []
        }
    },
    methods:{

    },
    mounted(){
        this.$http.get('/static/items/itemList.json').then(function(res){
            this.itemList = res.body.content
            
        })
        
    }
}
</script>


<style lang="scss" scoped>
    .gridView{
        padding: 0;
        list-style-type: none;
        li{
            min-width: 30.5%;
            float: left;
            margin: 25px .5% 10px;
            position: relative;
            border: 1px solid #A1A1A1;
            outline: #f5f5f5 solid 5px;
            min-height: 450px;
            padding: 15px;
            &:nth-child(3n+2) {
                margin: 25px 3.2% 10px;
            }
        }
        
    }
</style>
	