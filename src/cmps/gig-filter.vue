<template>
<section class="filter">
    <button class="tags-btn" @click="ToggleTagsModal">Categories <span :class="{open:openTagsModal}">></span>
    <tags-modal class="tags-modal" v-if="openTagsModal" @close="openTagsModal = false" @search="filter"/>
    </button>
    <button class="delivery-btn" @click="ToggleDeliveryModal">Delivery Days <span :class="{open:openDeliveryModal}">></span></button>
    <delivery-modal class="delivery-modal" v-if="openDeliveryModal" @close="openDeliveryModal = false" @search="filter"/>
    <button @click="TogglePriceModal" class="price-btn">Price <span :class="{open:openPriceModal}">></span></button>
    <price-modal class="price-modal" v-if="openPriceModal" @close="openPriceModal = false" @search="filter" />
</section>
</template>
<script>
import priceModal from './price-modal.vue'
import DeliveryModal from './delivery-modal.vue'
import tagsModal from './tags-modal.vue'
export default {
    data(){
        return{
            filterBy:{
                txt:'',
                tags:'all',
                delivery: 'all',
                price:{
                    min:0,
                    max:Infinity
                    }
            },
            openTagsModal:false,
            openDeliveryModal: false,
            openPriceModal: false
        }
    },
    methods:{
        filter(filterBy){
            if(filterBy) this.filterBy = filterBy
            this.$store.commit({type:'setFilter',filterBy:this.filterBy})
            this.openDeliveryModal = false,
            this.openTagsModal = false;
            this.openPriceModal = false
        },
        ToggleTagsModal(){
            this.openPriceModal = false
            this.openDeliveryModal = false,
            this.openTagsModal = !this.openTagsModal
    },
        ToggleDeliveryModal(){
            this.openPriceModal = false
            this.openTagsModal = false;
            this.openDeliveryModal = !this.openDeliveryModal
    },
        TogglePriceModal(){
            this.openTagsModal = false
            this.openDeliveryModal = false;
            this.openPriceModal = !this.openPriceModal
    },
        closeTryModal(){
            this.openPriceModal = false
            this.openDeliveryModal = false,
            this.openTagsModal = false;
        }
    },
    components:{
        tagsModal,
        DeliveryModal,
        priceModal
    },
    destroyed(){
        this.filterBy.txt = ''
        this.filterBy.tags = 'all' 
        this.filterBy.delivery = 'all',
        this.filterBy.price.min = 0
        this.filterBy.max = Infinity            
        }
    }
</script>
