<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex column sort-container">
                    <div class="flex">
                        <input  id="high-to-low" type="radio" value="high-to-low"  v-model="sortBy">
                        <label :class="isClicked('high-to-low')" class="high-to-low" for="high-to-low">High To Low</label>
                    </div>
                    <div class="flex">
                        <input  id="low-to-high" type="radio" value="low-to-high" v-model="sortBy">
                        <label :class="isClicked('low-to-high')" class="low-to-high" for="low-to-high">Low To High</label>
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
            sortBy:'all',
            isLowClicked:false,
            isHighClicked:false,
        }
    },
methods: {
    close() {
    this.$emit("close");
    },
    search(){
        this.$emit('search', this.filterBy)
        this.$emit('sort', this.sortBy)
    },
checkClicked(diff){
    if(diff === 'high') {
        this.isHighClicked = true 
        this.isLowClicked = false
    }
    else if(diff === 'low'){
        this.isHighClicked = false 
        this.isLowClicked = true
    }
}
},
computed:{
       isClicked(){
        return ((sortBy)=>{
            if(sortBy === this.sortBy)
            return 'clicked'
        })
    }
},
components: {
    menuContentModal,
},
}
</script>

