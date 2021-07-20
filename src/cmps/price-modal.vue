<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex column price-container">
                    <div class="flex">
                        <label class="min-price" for="min-price">Min Price: </label>
                        <input  name="min-price" type="number" placeholder="Min Price"  v-model="filterBy.price.min">
                    </div>
                    <div class="flex">
                        <label class="max-price" for="max-price">Max Price: </label>
                        <input  name="max-price" type="number" placeholder="Max Price"  v-model="filterBy.price.max">
                    </div>
                </div>
            </form>
        </template>
    </menu-content-modal>
</template>

<script>
import menuContentModal from './menu-content-modal.vue'
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
        }
    },
methods: {
    close() {
    this.$emit("close");
    },
    search(){
        this.$emit('search', this.filterBy)
    }
},
components: {
    menuContentModal,
},
}
</script>

