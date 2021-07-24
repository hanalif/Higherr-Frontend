<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex delivery-container">
                    <div>
                        <div class="flex delivery-section">
                            <input type="radio" id="one" value="1" v-model="filterBy.delivery">
                            <label :class="isClicked('1')" class="one" for="one">Up To 1 Day</label>
                        </div>
                        <div class="flex delivery-section">
                            <input type="radio" id="three" value="3" v-model="filterBy.delivery">
                            <label :class="isClicked('3')" class="three" for="three">Up To 3 Days</label>
                        </div>
                        <div class="flex delivery-section">
                            <input type="radio" id="seven" value="7" v-model="filterBy.delivery">
                            <label :class="isClicked('7')" class="seven" for="seven">Up To 7 Days</label>
                        </div>
                        <div class="flex delivery-section">
                            <input type="radio" id="fifteen" value="15" v-model="filterBy.delivery">
                            <label :class="isClicked('15')" class="fifteen" for="fifteen">Up To 15 Days</label>
                        </div>
                    </div>
                    <div>
                        <div class="flex delivery-section">
                            <input type="radio" id="thirty" value="30" v-model="filterBy.delivery">
                            <label :class="isClicked('30')" class="thirty" for="thirty">Up To 30 Days</label>
                        </div>
                        <div class="flex delivery-section">
                            <input type="radio" id="all" value="all" v-model="filterBy.delivery">
                            <label :class="isClicked('all')" class="all" for="all">All Delivery Days</label>
                        </div>
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
computed:{
     isClicked(){
        return ((delivery)=>{
            if(delivery === this.filterBy.delivery)
            return 'clicked'
        })
    }
},
components: {
    menuContentModal,
},
}
</script>
