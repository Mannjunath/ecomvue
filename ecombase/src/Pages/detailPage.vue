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
                    <ul>
                        <li><b>Manufacturers: </b><span>{{ items.manufacturer }}</span></li>
                        <li><b>Brand Name: </b><span>{{ items.brand }}</span></li>
                        <li><b>PN: </b><span>{{ items.partNumber }}</span></li>
                        <li><b>MPN: </b><span>{{ items.manfPartNumber }}</span></li>
                        <li><b>UPC: </b><span>{{ items.upc }}</span></li>
                        <li><b>CPN: </b>
                        <span v-for="cpnList in items.pricingWarehouse.customerPartNumbers" :key="cpnList">
                            {{ cpnList }}
                        </span>
                        </li>
                        <li><b>Available: </b><span>{{ items.warehouses[0].quantityAvailable }}</span></li>
                        <li><b>Min. Order Qty: </b><span>{{ items.minimumOrderQuantity }} </span></li>
                        <li><b>Qty. Interval: </b><span>{{ items.orderQuantityInterval }} </span></li>
                        <li><b>List Price: </b><span> {{ items.pricingWarehouse.listPrice | currency}}</span></li>
                        <li><b>Your Price: </b><span> {{ items.pricingWarehouse.costPrice | currency}}</span></li>
                    </ul>
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
