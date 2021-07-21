<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex column delivery-container">
                    <div class="flex">
                        <input type="radio" name="1" value="1" v-model="filterBy.delivery">
                        <label for="1">Up To 1 Day</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="3" value="3" v-model="filterBy.delivery">
                        <label for="3">Up To 3 Days</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="7" value="7" v-model="filterBy.delivery">
                        <label for="7">Up To 7 Days</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="15" value="15" v-model="filterBy.delivery">
                        <label for="15">Up To 15 Days</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="30" value="30" v-model="filterBy.delivery">
                        <label for="30">Up To 30 Days</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="all" value="all" v-model="filterBy.delivery">
                        <label for="all">All Delivery Days</label>
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
