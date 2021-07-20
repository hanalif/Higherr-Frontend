<template>
    <menu-content-modal @close="close" @search="search">
        <template v-slot:body>
            <form action="">
                <div class="flex tags-container">
                    <div>
                        <div class="flex tag-section">
                            <input type="radio" name="media" value="media" v-model="filterBy.tags">
                            <label for="media">Media</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" name="music" value="music" v-model="filterBy.tags">
                            <label for="music">Music</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" value="web-develop" v-model="filterBy.tags">
                            <label for="web-develop">Web-Develop</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" name="grafic" value="grafic" v-model="filterBy.tags">
                            <label for="grafic">Grafic</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" name="comunication" value="comunication" v-model="filterBy.tags">
                            <label for="comunication">Comunication</label>
                        </div>
                    </div>
                    <div>
                        <div class="flex tag-section">
                            <input type="radio" name="home-design" value="home-design" v-model="filterBy.tags">
                            <label for="home-design">Home Design</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" name="logo-design" value="logo-design" v-model="filterBy.tags">
                            <label for="logo-design">Logo Design</label>
                        </div>
                        <div class="flex tag-section">
                            <input type="radio" name="all" value="all" v-model="filterBy.tags">
                            <label for="all">All</label>
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
            console.log(this.filterBy);
            this.$emit('search', this.filterBy)
        }
},
components: {
    menuContentModal,
},
};
</script>
