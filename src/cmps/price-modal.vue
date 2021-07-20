<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex column price-container">
                    <div class="flex">
                        <label for="min-price">Min Price: </label>
                        <input class="min-price" name="min-price" type="number" placeholder="Min Price"  v-model="filterBy.price.min">
                    </div>
                    <div class="flex">
                        <label for="max-price">Max Price: </label>
                        <input class="max-price" name="max-price" type="number" placeholder="Max Price"  v-model="filterBy.price.max">
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

