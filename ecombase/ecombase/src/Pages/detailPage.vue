<template>
    <div class="container">
       
        <div class="row" v-for="items in itemList" :key="items.customerERPId" v-if="$route.params.id == items.id">
            <div class="col-md-4">
                <img :src="items.imageName" width="100%" />
            </div>
            <div class="col-md-8">
              <h2>{{ items.brand }} {{ items.manfPartNumber }}</h2>
              <p>{{ items.description }}</p>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="row skuDetails">
                        <div class="col-md-6">
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
                            <p><b>Min. Order Qty: </b><span>{{ items.minimumOrderQuantity }} </span></p>
                            <p><b>Qty. Interval: </b><span>{{ items.orderQuantityInterval }} </span></p>
                        </div>
                        <div class="col-md-6 text-right">
                            <p><b>Available: </b><span>{{ items.warehouses[0].quantityAvailable }}</span></p>
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
                    </div>
                </div>
                <div class="col-md-6">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            itemList: []
        }
    },
    methods:{

    },
    mounted(){
        this.$http.get('/static/items/itemList.json')
        .then(function(res){
            console.log(res.body.content); 
            this.itemList = res.body.content
        })
        
    }
}
</script>


<style lang="scss" scoped>
   
</style>
