<template>
<section class="filter flex space-between">
    <div class="filter-btns">
        <button class="tags-btn" @click="ToggleTagsModal">Categories <span :class="{open:openTagsModal}">></span></button>
        <tags-modal class="tags-modal" v-if="openTagsModal" @close="openTagsModal = false" @search="filter"/>
        <button class="delivery-btn" @click="ToggleDeliveryModal">Delivery Days <span :class="{open:openDeliveryModal}">></span></button>
        <delivery-modal class="delivery-modal" v-if="openDeliveryModal" @close="openDeliveryModal = false" @search="filter"/>
        <button @click="TogglePriceModal" class="price-btn">Price <span :class="{open:openPriceModal}">></span></button>
        <price-modal class="price-modal" v-if="openPriceModal" @close="openPriceModal = false" @search="filter"/>
    </div>
    <div class="sort">
        <button class="sort-btn" @click="toggleSortModal"><span class="sort-By">Sort By</span> Price<span class="arrow" :class="{open:openSortModal}">></span></button>
        <sort-modal class="sort-modal" v-if="openSortModal" @close="openSortModal = false" @sort="sorting"/>
    </div>
</section>
</template>
<script>
import priceModal from './price-modal.vue'
import DeliveryModal from './delivery-modal.vue'
import tagsModal from './tags-modal.vue'
import sortModal from './sort-modal.vue'
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
            openPriceModal: false,
            openSortModal:false,
            sortBy:'all'
        }
    },
    methods:{
        filter(filterBy){
            if(filterBy) this.filterBy = filterBy
            this.$store.commit({type:'setFilter',filterBy:this.filterBy})
            this.$emit('filter',this.filterBy)
            this.openDeliveryModal = false
            this.openTagsModal = false
            this.openPriceModal = false
            this.openSortModal=false
        },
        ToggleTagsModal(){
            this.openSortModal=false
            this.openPriceModal = false
            this.openDeliveryModal = false,
            this.openTagsModal = !this.openTagsModal
        },
        ToggleDeliveryModal(){
            this.openSortModal=false
            this.openPriceModal = false
            this.openTagsModal = false;
            this.openDeliveryModal = !this.openDeliveryModal
        },
        TogglePriceModal(){
            this.openSortModal=false
            this.openTagsModal = false
            this.openDeliveryModal = false;
            this.openPriceModal = !this.openPriceModal
        },
        toggleSortModal(){
            this.openTagsModal = false
            this.openDeliveryModal = false;
            this.openPriceModal = false
            this.openSortModal = !this.openSortModal
        },
        sorting(sortBy){
            if(sortBy) this.sortBy = sortBy
            this.$store.commit({type:'setSort', sortBy:this.sortBy})
            this.$store.commit({type:'setFilter', filterBy:this.filterBy})
            this.openSortModal=false
        }
    },
    components:{
        tagsModal,
        DeliveryModal,
        priceModal,
        sortModal
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
