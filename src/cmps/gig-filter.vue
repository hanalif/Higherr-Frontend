<template>
<section class="filter">
    <input type="text" v-model="filterBy.txt" placeholder="Find Services"/>
    <button @click="openTryModal">Categories</button>
    <filter-modal v-if="showTryModal" @close="closeTryModal">
        
        </filter-modal>
        
    <select name="" id="" v-model="filterBy.delivery" @change="filter">
        <option value="1">Up To 1 Day</option>
        <option value="3">Up To 3 Days</option>
        <option value="7">Up To 7 Days</option>
        <option value="15">Up To 15 Days</option>
        <option value="30">Up To 30 Days</option>
        <option value="all">All Delivery Days</option>
    </select>
    <input type="number" placeholder="Min Price"  v-model="filterBy.price.min">
    <input type="number" placeholder="Max Price"  v-model="filterBy.price.max">
    <button @click="filter" class="btn-primary btn">Search</button>
</section>
</template>

<script>
import filterModal from './filter-modal.vue'
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
            showTryModal:false,
        }
    },
    methods:{
        filter(){
            this.$store.commit({type:'setFilter',filterBy:this.filterBy})
        },
        openTryModal(){
        this.showTryModal = true;
    },
        closeTryModal(){
        this.showTryModal = false;
        }
    },
    components:{
        filterModal
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

<style>
/* <select @click="openTryModal" name="" id="" v-model="filterBy.tags" @change="filter">
        <option value="media">Media</option>
        <option value="music">Music</option>
        <option value="web-develop">Web-Develop</option>
        <option value="grafic">Grafic</option>
        <option value="comunication">Comunication</option>
        <option value="home-design">Home Design</option>
        <option value="logo-design">Logo Design</option>
        <option value="all">All Categories</option>
        <filter-modal/>
    </select> */
</style>