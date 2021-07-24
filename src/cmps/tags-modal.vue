<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex tags-container">
                    <div>
                        <div class="flex tag-section">
                            <input  id="media" type="radio" name="media" value="media" v-model="filterBy.tags">
                            <label :class="isClicked('media')"  class="media" for="media">Media</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="music" type="radio" name="music" value="music" v-model="filterBy.tags">
                            <label :class="isClicked('music')" class="music" for="music">Music</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="web-develop" type="radio" value="web-develop" v-model="filterBy.tags">
                            <label :class="isClicked('web-develop')" class="web-develop" for="web-develop">Web-Develop</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="graphic" type="radio" name="graphic" value="graphic" v-model="filterBy.tags">
                            <label :class="isClicked('graphic')" class="graphic" for="graphic">Graphic</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="communication" type="radio" name="communication" value="communication" v-model="filterBy.tags">
                            <label :class="isClicked('communication')" class="communication" for="communication">Communication</label>
                        </div>
                    </div>
                    <div>
                        <div class="flex tag-section">
                            <input id="home-design" type="radio" name="home-design" value="home-design" v-model="filterBy.tags">
                            <label :class="isClicked('home-design')" class="home-design" for="home-design">Home Design</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="logo-design" type="radio" name="logo-design" value="logo-design" v-model="filterBy.tags">
                            <label :class="isClicked('logo-design')" class="logo-design" for="logo-design">Logo Design</label>
                        </div>
                        <div class="flex tag-section">
                            <input id="all" type="radio" name="all" value="all" v-model="filterBy.tags">
                            <label :class="isClicked('all')" class="all" for="all">All</label>
                        </div>
                    </div>
                </div>
            </form>
        </template>
    </menu-content-modal>
</template>

<script>
import menuContentModal from "./menu-content-modal.vue";
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
        },
},
computed:{
    isClicked(){
        return ((tag)=>{
            if(tag === this.filterBy.tags)
            return 'clicked'
        })
    }
},
components: {
    menuContentModal,
},
};
</script>
